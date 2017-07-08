import React from "react";

import type { Note as NoteType } from "../lib/exerciseGenerator";
import { FLAT } from "../lib/exerciseGenerator";

type Props = {
  note: NoteType
};

function Note({ note }: Props) {
  let modifier = "";

  if (note.modifier) {
    modifier = note.modifier === FLAT ? "b" : "#";
  }

  return (
    <span>
      {note.letter}
      {modifier}
    </span>
  );
}

export default Note;
