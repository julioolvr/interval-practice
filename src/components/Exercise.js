// @flow
import React from "react";

import "./Exercise.css";

import type { Note as NoteType } from "../lib/notes";
import type { RealDistance as RealDistanceType } from "../lib/exerciseGenerator";

import { isSameNote, noteToString } from "../lib/notes";
import Note from "./Note";
import NoteSelector from "./NoteSelector";
import DistanceSelector from "./DistanceSelector";
import ResultOverlay from "./ResultOverlay";
import getRandomInterval from "../lib/exerciseGenerator";
import randomFromArray from "../lib/randomFromArray";

type ValueGuessed = NoteType | RealDistanceType;

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
    guess: undefined
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

  render() {
    const { interval, toGuess, guess } = this.state;

    const fromNote =
      toGuess === GUESSES.From
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
          />
        : <Note note={interval.from} />;

    const toNote =
      toGuess === GUESSES.To
        ? <NoteSelector
            onSelect={note => this.setGuess(note)}
            value={((guess: any): NoteType)}
          />
        : <Note note={interval.to} />;

    const distance =
      toGuess === GUESSES.Distance
        ? <DistanceSelector
            onSelect={distance => this.setGuess(distance)}
            value={((guess: any): RealDistanceType)}
          />
        : interval.distance.name;

    let isCorrect = false;

    if (guess && (toGuess === GUESSES.From || toGuess === GUESSES.To)) {
      const noteToCheck = GUESSES.From ? interval.from : interval.to;
      isCorrect = isSameNote(noteToCheck, ((guess: any): NoteType));
    } else if (guess && toGuess === GUESSES.Distance) {
      isCorrect = interval.distance.name === guess;
    }

    return (
      <div className="Exercise">
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
        />
      </div>
    );
  }
}

export default Exercise;
