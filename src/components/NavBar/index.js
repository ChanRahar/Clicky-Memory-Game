import React from "react";


const NavBar = ({ children, score, highscore }) =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand lead" href="/">{children}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/ChanRahar/Clicky-Memory-Game" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                
            </ul>
            <span className="navbar-text">
                <h3>
                    Score: {score}  Highscore: {highscore}
                </h3>
                
            </span>
        </div>
    </nav>

export default NavBar;