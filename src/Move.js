import React from "react";

export default function Move({ move }) {
  return (
    <div>
      <li>{move.move.name}</li>
    </div>
  );
}
