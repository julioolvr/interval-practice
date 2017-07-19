// @flow
import React from "react";

import "./Exercise.css";

import type { Note as NoteType } from "../lib/notes";
import type {
  RealDistance as RealDistanceType,
  RelativeInterval as RelativeIntervalType
} from "../lib/exerciseGenerator";

import { isSameNote } from "../lib/notes";
import Note from "./Note";
import NoteSelector from "./NoteSelector";
import DistanceSelector from "./DistanceSelector";
import ResultOverlay from "./ResultOverlay";
import getRandomInterval from "../lib/exerciseGenerator";
import randomFromArray from "../lib/randomFromArray";

type ValueGuessed = NoteType | RealDistanceType | RelativeIntervalType;

type Guess = "From" | "To" | "Distance";
const GUESSES: { [Guess]: Guess } = {
  From: "From",
  To: "To",
  Distance: "Distance"
};

class Exercise extends React.Component {
  state = {
    interval: getRandomInterval(),
    toGuess: randomFromArray([GUESSES.From, GUESSES.To, GUESSES.Distance]),
    guess: undefined,
    relative: false
  };

  nextInterval() {
    this.setState({
      interval: getRandomInterval(),
      toGuess: randomFromArray([GUESSES.From, GUESSES.To, GUESSES.Distance]),
      guess: undefined
    });
  }

  setGuess(guess: ValueGuessed) {
    this.setState({ guess });
  }

  toggleRelative() {
    this.setState(prevState => ({ relative: !prevState.relative }));
  }

  render() {
    const { interval, toGuess, guess, relative } = this.state;

    const fromNote =
      toGuess === GUESSES.From
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
            relative={relative}
          />
        : <Note note={interval.from} relative={relative} />;

    const toNote =
      toGuess === GUESSES.To
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
            relative={relative}
          />
        : <Note note={interval.to} relative={relative} />;

    const distance =
      toGuess === GUESSES.Distance
        ? <DistanceSelector
            onSelect={distance => this.setGuess(distance)}
            value={((guess: any): RealDistanceType)}
            relative={relative}
          />
        : relative ? interval.distance.relative : interval.distance.name;

    let isCorrect = false;

    if (guess && (toGuess === GUESSES.From || toGuess === GUESSES.To)) {
      const noteToCheck =
        toGuess === GUESSES.From ? interval.from : interval.to;
      isCorrect = isSameNote(noteToCheck, ((guess: any): NoteType), relative);
    } else if (guess && toGuess === GUESSES.Distance) {
      isCorrect =
        (relative ? interval.distance.relative : interval.distance.name) ===
        guess;
    }

    return (
      <div className="Exercise">
        <label>
          <input
            type="checkbox"
            value={relative}
            onChange={() => this.toggleRelative()}
          />
          Relative
        </label>
        <div className="Exercise__parts">
          <div className="Exercise__part">
            <div>
              <div className="Exercise__partTitle">From:</div>
              <div className="Exercise__partContent">
                {fromNote}
              </div>
            </div>
          </div>
          <div className="Exercise__part">
            <div>
              <div className="Exercise__partTitle">To:</div>
              <div className="Exercise__partContent">
                {toNote}
              </div>
            </div>
          </div>
          <div className="Exercise__part">
            <div>
              <div className="Exercise__partTitle">Distance:</div>
              <div className="Exercise__partContent">
                {distance}
              </div>
            </div>
          </div>
        </div>
        <ResultOverlay
          visible={!!guess}
          isCorrect={isCorrect}
          onNext={() => this.nextInterval()}
          interval={interval}
          relative={relative}
        />
      </div>
    );
  }
}

export default Exercise;
