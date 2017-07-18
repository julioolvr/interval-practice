import React from "react";

import "./ResultOverlay.css";

import type { Interval } from "../lib/exerciseGenerator";
import { noteToString } from "../lib/notes";

type Props = {
  visible: boolean,
  isCorrect: boolean,
  onNext: () => void,
  interval: Interval
};

function ResultOverlay({ visible, isCorrect, onNext, interval }: Props) {
  const style = {};

  if (!visible) {
    style.display = "none";
  }

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
        {noteToString(interval.from)} → {noteToString(interval.to)} ={" "}
        {interval.distance.name}
      </div>
      <div className="ResultOverlay__legend">(click anywhere to continue)</div>
    </div>
  );
}

export default ResultOverlay;
