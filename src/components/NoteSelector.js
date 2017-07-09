// @flow
import React from "react";

import { NOTES, noteToString } from "../lib/notes";

function NoteSelector() {
  const options = NOTES.map(note =>
    <option key={noteToString(note)}>
      {noteToString(note)}
    </option>
  );

  return (
    <select>
      {options}
    </select>
  );
}

export default NoteSelector;
