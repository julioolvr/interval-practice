import React from "react";

import Note from "./Note";
import getRandomInterval from "../lib/exerciseGenerator";
import randomFromArray from "../lib/randomFromArray";

type Guess = "From" | "To" | "Distance";
const GUESSES: [Guess] = ["From", "To", "Distance"];

class Exercise extends React.Component {
  state = {
    interval: getRandomInterval(),
    toGuess: randomFromArray(GUESSES)
  };

  nextInterval() {
    this.setState({
      interval: getRandomInterval(),
      toGuess: randomFromArray(GUESSES)
    });
  }

  render() {
    const { interval, toGuess } = this.state;

    return (
      <div>
        <div>
          {toGuess === "From" && "➡️"} From: <Note note={interval.from} />
        </div>
        <div>
          {toGuess === "To" && "➡️"} To: <Note note={interval.to} />
        </div>
        <div>
          {toGuess === "Distance" && "➡️"} Distance: {interval.distance.name}
        </div>
        <button onClick={() => this.nextInterval()}>Next</button>
      </div>
    );
  }
}

export default Exercise;
