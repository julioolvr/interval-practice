// @flow
import React from "react";

import "./NoteSelector.css";

import type { Note } from "../lib/notes";
import { NOTES, noteToString, isSameNote } from "../lib/notes";

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
  value: ?Note,
  onSelect: Note => void
};

function NoteSelector({ value, onSelect }: Props) {
  const options = NOTES.map(note =>
    <button
      key={noteToString(note)}
      onClick={() => onSelect(note)}
      className={[
        "NoteSelector__note",
        value && isSameNote(note, value) && "NoteSelector__note--selected"
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={!!value}
    >
      {noteToString(note)}
    </button>
  );

  return (
    <div className="NoteSelector">
      {options}
    </div>
  );
}

export default NoteSelector;
