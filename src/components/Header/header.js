import React from "react";
import "./css.css";

function Header(props) {
    return (
        <nav className="navbar navbar-dark bg-primary sticky-top">
            <div className="col-4 text-center">
                <a className="brand text-light welcome" href="location.href">Welcome to the Game</a>
            </div>

            <div className="col-4 text-center">
                <h6 className="score text-light">{props.message}</h6>
            </div>
            <div className="col-4 text-center">
                <p className="score text-light">Score: {props.score}  ||  Best: {props.best}</p>
            </div>
        </nav>
    );
}

export default Header;