// @flow
import React from "react";

import type { Note } from "../lib/notes";
import { NOTES, noteToString } from "../lib/notes";

const NOTE_FOR_STRING = NOTES.reduce((acc, note) => {
  acc[noteToString(note)] = note;
  return acc;
}, {});

type Props = {
  value: Note,
  onSelect: Note => void
};

function NoteSelector({ value, onSelect }: Props) {
  const options = NOTES.map(note =>
    <option key={noteToString(note)} value={noteToString(note)}>
      {noteToString(note)}
    </option>
  );

  return (
    <select
      value={value && noteToString(value)}
      onChange={e => onSelect(NOTE_FOR_STRING[e.target.value])}
    >
      <option>---</option>
      {options}
    </select>
  );
}

export default NoteSelector;
