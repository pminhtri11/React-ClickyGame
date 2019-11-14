import React from "react";
import Header from "./components/Header/header";
import Jumpotron from "./components/jumpotron/jumpotron";
import ImageCreate from "./components/ImageCreate/images";
import Characters from "./characters.json";
import "./App.css";
var shuffle = require('shuffle-array')


class App extends React.Component {
    state = {
        message: "Welcome to the Game",
        Characters,
        score: 0,
        highscore: 0,
    };

    changeState = (id) => {
        let guessCorrectly = false;
        const newArray = this.state.Characters.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessCorrectly = true;
                }
            }
            return newItem;
        })
        guessCorrectly ? this.handleCorrect(newArray) : this.handleIncorrect(newArray);
    }

    handleCorrect = (newArray) => {
        console.log(this.state.score)
        if (this.state.highscore <= this.state.score) {
            // console.log(this.state.highscore)
            this.setState({
                highscore: (this.state.score +1),
                
            })
        };
        this.setState({
            message: "Got 1 Point",
            score: this.state.score + 1,
            Characters: shuffle(newArray),
        });

    }

    handleIncorrect = () => {
        this.setState({
            message: "You Lose, Try Again",
            Characters: shuffle(Characters),
            score: 0
        })
    }

    render() {
        return (
            <div>
                <Header score={this.state.score} best={this.state.highscore} message={this.state.message}/>
                <Jumpotron />
                <div className="container">
                    {this.state.Characters.map(char =>
                        <ImageCreate image={char.image} clicked={char.clicked} name={char.name} id={char.id} change={this.changeState} key={char.id} />
                    )}
                </div>
            </div>
        );
    }
}
export default App;