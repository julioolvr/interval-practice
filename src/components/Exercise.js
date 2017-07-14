// @flow
import React from "react";

import type { Note as NoteType } from "../lib/notes";
import type {
  Interval,
  RealDistance as RealDistanceType
} from "../lib/exerciseGenerator";

import { NOTES, isSameNote } from "../lib/notes";
import Note from "./Note";
import NoteSelector from "./NoteSelector";
import DistanceSelector from "./DistanceSelector";
import getRandomInterval, { DISTANCES } from "../lib/exerciseGenerator";
import randomFromArray from "../lib/randomFromArray";

type ValueGuessed = NoteType | RealDistanceType;

type Guess = "From" | "To" | "Distance";
const GUESSES: Array<Guess> = ["From", "To", "Distance"];

class Exercise extends React.Component {
  state = {
    interval: getRandomInterval(),
    toGuess: randomFromArray(GUESSES),
    guess: undefined
  };

  nextInterval() {
    this.setState({
      interval: getRandomInterval(),
      toGuess: randomFromArray(GUESSES),
      guess: undefined
    });
  }

  setGuess(guess: ValueGuessed) {
    this.setState({ guess });
  }

  render() {
    const { interval, toGuess, guess } = this.state;

    const fromNote =
      toGuess === "From"
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
          />
        : <Note note={interval.from} />;

    const toNote =
      toGuess === "To"
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
          />
        : <Note note={interval.to} />;

    const distance =
      toGuess === "Distance"
        ? <DistanceSelector
            onSelect={distance => this.setGuess(distance)}
            value={((guess: any): RealDistanceType)}
          />
        : interval.distance.name;

    let isCorrect = false;

    if (guess && (toGuess === "From" || toGuess === "To")) {
      const noteToCheck = toGuess === "From" ? interval.from : interval.to;
      isCorrect = isSameNote(noteToCheck, ((guess: any): NoteType));
    } else if (guess && toGuess === "Distance") {
      isCorrect = interval.distance.name === guess;
    }

    return (
      <div>
        <div>
          {toGuess === "From" && "➡️"} From: {fromNote}
        </div>
        <div>
          {toGuess === "To" && "➡️"} To: {toNote}
        </div>
        <div>
          {toGuess === "Distance" && "➡️"} Distance: {distance}
        </div>
        {isCorrect ? "Yes!" : "No!"}
        <button onClick={() => this.nextInterval()}>Next</button>
      </div>
    );
  }
}

export default Exercise;
