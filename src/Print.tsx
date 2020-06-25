import React from "react";
import "./Print.css";

export default function Print() {
  return (
    <div className="page">
      <div className="progressbar">
        <span className="progressbar__caption"></span>
        <svg
          className="progressbar__graph"
          width="48"
          height="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="progressbar__circle progressbar__graph-bg"
            cx="50%"
            cy="50%"
            r=".4em"
            stroke-width="var(--progressbarGraphStrokeWidth)"
            stroke="var(--progressbarGraphColor)"
            fill="none"
          ></circle>
          <circle
            className="progressbar__circle progressbar__graph-value"
            cx="50%"
            cy="50%"
            r=".4em"
            stroke-width="var(--progressbarGraphStrokeWidth)"
            stroke="var(--progressbarGraphColor)"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="none"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
