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
    <div className="ResultOverlay" style={style}>
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
      <button className="ResultOverlay__button" onClick={onNext}>
        Next <span className="ResultOverlay__buttonArrow">➤</span>
      </button>
    </div>
  );
}

export default ResultOverlay;
