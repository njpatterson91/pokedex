import React from "react";
import Move from "./Move";
export default function Moves({ move }) {
  return move.map((res, index) => {
    return (
      <div>
        <Move key={index} move={res} />
      </div>
    );
  });
}
