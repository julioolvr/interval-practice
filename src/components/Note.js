import React from "react";
import { FLAT } from "../lib/exerciseGenerator";

function Note({ note }) {
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
