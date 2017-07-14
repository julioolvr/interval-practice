// @flow
import React from "react";

import type { RealDistance } from "../lib/exerciseGenerator";
import { DISTANCES } from "../lib/exerciseGenerator";

type Props = {
  value: RealDistance,
  onSelect: RealDistance => void
};

function DistanceSelector({ value, onSelect }: Props) {
  const options = DISTANCES.map(distance =>
    <option key={distance} value={distance}>
      {distance}
    </option>
  );

  return (
    <select value={value} onChange={e => onSelect(e.target.value)}>
      <option>---</option>
      {options}
    </select>
  );
}

export default DistanceSelector;
