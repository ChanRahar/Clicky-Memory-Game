import React, { Component } from 'react';
import friends from './friends.json'
import './App.css';
import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import NavBar from './components/NavBar'
import PageWrap from './components/PageWrap'

class App extends Component {

  state = {
    friends,
    score: 0,
    highscore: 0,
  }

  gameReset = () => {
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  }

  setHighScore = () => {
    this.setState({ highscore: this.state.score }, function () {
      console.log(this.state.highscore);
    });
  }

  win = () => {
    if (this.state.score === 12) {
      this.setHighScore();
      alert(`YOU WIN \nscore: ${this.state.score}`);
      this.gameReset();
    }
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setHighScore();
    }
    alert(`YOU LOST :( \nscore: ${this.state.score}`);

    this.gameReset();
  }


  clickCount = id => {
    this.state.friends.find((character, i) => {
      if (character.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => .5 - Math.random())
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <PageWrap>
        <NavBar score={this.state.score} highscore={this.state.highscore}>Memory Game</NavBar>
        <Wrapper>
          {this.win()}
          <Header score={this.state.score} highscore={this.state.highscore}>To win, DO NOT click on the same image twice!!</Header>

          {this.state.friends.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clickCount={this.clickCount}
            />
          ))}
        </Wrapper>
      </PageWrap>

    )
  }
}

export default App;
