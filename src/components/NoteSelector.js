// @flow
import React from "react";

import Selector from "./Selector";
import type { Note } from "../lib/notes";
import { NOTES, noteToString } from "../lib/notes";

type Props = {
  value?: Note,
  onSelect: Note => void
};

function NoteSelector({ value, onSelect }: Props) {
  const options = NOTES.map(note => ({
    value: note,
    name: noteToString(note)
  }));

  return <Selector options={options} value={value} onSelect={onSelect} />;
}

export default NoteSelector;
