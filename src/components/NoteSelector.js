// @flow
import React from "react";

import Selector from "./Selector";
import type { Note } from "../lib/notes";
import { NOTES, noteToString } from "../lib/notes";

type Props = {
  value?: Note,
  onSelect: Note => void,
  relative?: boolean
};

function NoteSelector({ value, onSelect, relative = false }: Props) {
  const notes = relative ? NOTES.filter(note => !note.modifier) : NOTES;

  const options = notes.map(note => ({
    value: note,
    name: noteToString(note)
  }));

  return (
    <Selector
      options={options}
      value={value}
      onSelect={onSelect}
      columns={relative ? 1 : 3}
    />
  );
}

export default NoteSelector;
