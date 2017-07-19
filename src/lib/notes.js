// @flow
export type NoteLetter = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type NoteModifier = "Sharp" | "Flat";

export const SHARP: NoteModifier = "Sharp";
export const FLAT: NoteModifier = "Flat";

export type Note = {
  letter: NoteLetter,
  modifier?: NoteModifier
};

export const C_FLAT = {
  letter: "C",
  modifier: FLAT
};

export const C = {
  letter: "C"
};

export const C_SHARP = {
  letter: "C",
  modifier: SHARP
};

export const D_FLAT = {
  letter: "D",
  modifier: FLAT
};

export const D = {
  letter: "D"
};

export const D_SHARP = {
  letter: "D",
  modifier: SHARP
};

export const E_FLAT = {
  letter: "E",
  modifier: FLAT
};

export const E = {
  letter: "E"
};

export const E_SHARP = {
  letter: "E",
  modifier: SHARP
};

export const F_FLAT = {
  letter: "F",
  modifier: FLAT
};

export const F = {
  letter: "F"
};

export const F_SHARP = {
  letter: "F",
  modifier: SHARP
};

export const G_FLAT = {
  letter: "G",
  modifier: FLAT
};

export const G = {
  letter: "G"
};

export const G_SHARP = {
  letter: "G",
  modifier: SHARP
};

export const A_FLAT = {
  letter: "A",
  modifier: FLAT
};

export const A = {
  letter: "A"
};

export const A_SHARP = {
  letter: "A",
  modifier: SHARP
};

export const B_FLAT = {
  letter: "B",
  modifier: FLAT
};

export const B = {
  letter: "B"
};

export const B_SHARP = {
  letter: "B",
  modifier: SHARP
};

export const NOTES: Array<Note> = [
  C_FLAT,
  C,
  C_SHARP,
  D_FLAT,
  D,
  D_SHARP,
  E_FLAT,
  E,
  E_SHARP,
  F_FLAT,
  F,
  F_SHARP,
  G_FLAT,
  G,
  G_SHARP,
  A_FLAT,
  A,
  A_SHARP,
  B_FLAT,
  B,
  B_SHARP
];

export const NOTE_LETTERS: Array<NoteLetter> = [
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B"
];

export function noteToString(note: Note): string {
  if (!note.modifier) {
    return note.letter;
  }

  return `${note.letter}${note.modifier === FLAT ? "b" : "#"}`;
}

export function isSameNote(
  a: Note,
  b: Note,
  relative: boolean = false
): boolean {
  return a.letter === b.letter && (relative || a.modifier === b.modifier);
}
