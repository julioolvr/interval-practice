import React from "react";
import getRandomInterval from "../lib/exerciseGenerator";

function Exercise() {
  return (
    <pre>
      {JSON.stringify(getRandomInterval(), null, 2)}
    </pre>
  );
}

export default Exercise;
