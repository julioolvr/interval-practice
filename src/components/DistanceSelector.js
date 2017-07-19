// @flow
import React from "react";

import Selector from "./Selector";

import type { RealDistance, RelativeInterval } from "../lib/exerciseGenerator";
import { DISTANCES, RELATIVE_INTERVALS } from "../lib/exerciseGenerator";

type Props = {
  value?: RealDistance | RelativeInterval,
  onSelect: (RealDistance | RelativeInterval) => void,
  relative?: boolean
};

function DistanceSelector({ value, onSelect, relative = false }: Props) {
  const options = (relative ? RELATIVE_INTERVALS : DISTANCES).map(distance => ({
    value: distance,
    name: distance
  }));

  return (
    <Selector options={options} value={value} onSelect={onSelect} columns={2} />
  );
}

export default DistanceSelector;
