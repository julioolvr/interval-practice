import React from "react";

import Note from "./Note";
import getRandomInterval from "../lib/exerciseGenerator";

class Exercise extends React.Component {
  state = {
    interval: getRandomInterval()
  };

  nextInterval() {
    this.setState({ interval: getRandomInterval() });
  }

  render() {
    const { interval } = this.state;

    return (
      <div>
        <div>
          From: <Note note={interval.from} />
        </div>
        <div>
          To: <Note note={interval.to} />
        </div>
        <button onClick={() => this.nextInterval()}>Next</button>
      </div>
    );
  }
}

export default Exercise;
