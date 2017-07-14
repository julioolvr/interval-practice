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

    let isCorrect = false;

    if (guess && (toGuess === "From" || toGuess === "To")) {
      const noteToCheck = toGuess === "From" ? interval.from : interval.to;
      isCorrect = isSameNote(noteToCheck, ((guess: any): NoteType));
    } else {
      // TODO: Check distance
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
          {toGuess === "Distance" && "➡️"} Distance: {interval.distance.name}
        </div>
        {isCorrect ? "Yes!" : "No!"}
        <button onClick={() => this.nextInterval()}>Next</button>
      </div>
    );
  }
}

export default Exercise;
