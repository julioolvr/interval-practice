import React from "react";

import "./ResultOverlay.css";

import type { Interval } from "../lib/exerciseGenerator";
import { noteToString } from "../lib/notes";

type Props = {
  visible: boolean,
  isCorrect: boolean,
  onNext: () => void,
  interval: Interval,
  relative?: boolean
};

function ResultOverlay({
  visible,
  isCorrect,
  onNext,
  interval,
  relative = false
}: Props) {
  const style = {};

  if (!visible) {
    style.display = "none";
  }

  const fromNote = relative
    ? interval.from.letter
    : noteToString(interval.from);
  const toNote = relative ? interval.to.letter : noteToString(interval.to);
  const distance = relative
    ? interval.distance.relative
    : interval.distance.name;

  return (
    <div className="ResultOverlay" style={style} onClick={onNext}>
      <div
        className={[
          "ResultOverlay__result",
          isCorrect && "ResultOverlay__result--correct"
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {isCorrect ? "Correct!" : "Wrong!"}
      </div>
      <div className="ResultOverlay__solution">
        {fromNote} → {toNote} = {distance}
      </div>
      <div className="ResultOverlay__legend">(click anywhere to continue)</div>
    </div>
  );
}

export default ResultOverlay;
