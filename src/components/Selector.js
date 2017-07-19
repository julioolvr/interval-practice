// @flow
import React from "react";

import "./Selector.css";

type Props<T> = {
  options: Array<{ name: string, value: T }>,
  onSelect: T => void,
  value?: T,
  columns?: number
};

function Selector<T>({ options, value, onSelect, columns = 3 }: Props<T>) {
  const buttons = options.map(option =>
    <button
      key={option.name}
      onClick={() => onSelect(option.value)}
      className={[
        "Selector__button",
        value === option.value && "Selector__button--selected"
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={!!value}
    >
      {option.name}
    </button>
  );

  return (
    <div
      className="Selector"
      style={{ gridTemplateColumns: "auto ".repeat(columns) }}
    >
      {buttons}
    </div>
  );
}

export default Selector;
