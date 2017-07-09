// @flow
import React from "react";

import { FLAT, noteToString } from "../lib/notes";
import type { Note as NoteType } from "../lib/notes";

type Props = {
  note: NoteType
};

function Note({ note }: Props) {
  return (
    <span>
      {noteToString(note)}
    </span>
  );
}

export default Note;
