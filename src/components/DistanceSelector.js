// @flow
import React from "react";

import "./DistanceSelector.css";

import type { RealDistance } from "../lib/exerciseGenerator";
import { DISTANCES } from "../lib/exerciseGenerator";

type Props = {
  value: ?RealDistance,
  onSelect: RealDistance => void
};

function DistanceSelector({ value, onSelect }: Props) {
  const options = DISTANCES.map(distance =>
    <button
      key={distance}
      onClick={() => onSelect(distance)}
      className={[
        "DistanceSelector__distance",
        value === distance && "DistanceSelector__distance--selected"
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={!!value}
    >
      {distance}
    </button>
  );

  return (
    <div className="DistanceSelector">
      {options}
    </div>
  );
}

export default DistanceSelector;
