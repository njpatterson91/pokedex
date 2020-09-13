import React from "react";
import Stat from "./stat";

export default function Stats({ stats }) {
  return (
    <div>
      {stats.map((stat) => (
        <Stat key={stat.stat.name} stats={stat} />
      ))}
    </div>
  );
}
