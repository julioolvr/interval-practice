import React from "react";

import "./ResultOverlay.css";

type Props = {
  visible: boolean,
  isCorrect: boolean,
  onNext: () => void
};

function ResultOverlay({ visible, isCorrect, onNext }: Props) {
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
      <button className="ResultOverlay__button" onClick={onNext}>
        Next <span className="ResultOverlay__buttonArrow">➤</span>
      </button>
    </div>
  );
}

export default ResultOverlay;
