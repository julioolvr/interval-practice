// @flow
import React from "react";

import { noteToString } from "../lib/notes";
import type { Note as NoteType } from "../lib/notes";

type Props = {
  note: NoteType,
  relative: boolean
};

function Note({ note, relative }: Props) {
  return (
    <span>
      {relative ? note.letter : noteToString(note)}
    </span>
  );
}

export default Note;
