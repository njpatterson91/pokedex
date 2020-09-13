import React from "react";

export default function Stat({ stats }) {
  console.log(stats);
  return (
    <div>
      <p>
        {stats.stat.name}:{stats.base_stat}
      </p>
    </div>
  );
}
