import React, { Component } from 'react';
import friends from './friends.json'
import './App.css';
import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

class App extends Component {

  state = {
    friends,
    score: 0,
    highscore: 0,
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((character, i) => {
      if (character.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Friends List</Header>
      
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
    )
  }
}

export default App;
