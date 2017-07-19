// @flow
import React from "react";

import Selector from "./Selector";

import type { RealDistance } from "../lib/exerciseGenerator";
import { DISTANCES } from "../lib/exerciseGenerator";

type Props = {
  value?: RealDistance,
  onSelect: RealDistance => void
};

function DistanceSelector({ value, onSelect }: Props) {
  const options = DISTANCES.map(distance => ({
    value: distance,
    name: distance
  }));

  return (
    <Selector options={options} value={value} onSelect={onSelect} columns={2} />
  );
}

export default DistanceSelector;
