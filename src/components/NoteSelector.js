// @flow
import React from "react";

import "./NoteSelector.css";

import type { Note } from "../lib/notes";
import { NOTES, noteToString } from "../lib/notes";

const NOTE_FOR_STRING = NOTES.reduce((acc, note) => {
  acc[noteToString(note)] = note;
  return acc;
}, {});

const GROUPED_NOTES = NOTES.reduce((acc, note, i) => {
  let current;

  if (i % 3 === 0) {
    current = [];
    acc.push(current);
  } else {
    current = acc[acc.length - 1];
  }

  current.push(note);
  return acc;
}, []);

type Props = {
  value: Note,
  onSelect: Note => void
};

const COLORS = [
  "#FF1D00",
  "#FE0724",
  "#FE0F62",
  "#FE179E",
  "#FE1ED5",
  "#F326FE",
  "#C32EFE",
  "#9635FE",
  "#6D3DFE",
  "#4845FE",
  "#4C73FE",
  "#54A0FD",
  "#5CCAFD",
  "#63F0FD",
  "#6BFDE7",
  "#72FDC8",
  "#7AFDAC",
  "#82FD94",
  "#93FD89",
  "#B3FD91",
  "#D0FD98"
];

function NoteSelector({ value, onSelect }: Props) {
  const options = GROUPED_NOTES.map((noteGroup, i) =>
    <div key={noteGroup[0].letter}>
      {noteGroup.map((note, j) =>
        <button
          key={noteToString(note)}
          onClick={() => onSelect(note)}
          className="NoteSelector__note"
          style={{ backgroundColor: COLORS[i * noteGroup.length + j] }}
        >
          {noteToString(note)}
        </button>
      )}
    </div>
  );

  return (
    <div className="NoteSelector">
      {options}
    </div>
  );
}

export default NoteSelector;
