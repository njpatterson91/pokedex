import React from "react";
import styled from "styled-components";

const StatDiv = styled.div`
  text-align: left;
`;

export default function Stat({ stats }) {
  return (
    <StatDiv>
      <p>
        {stats.stat.name}:{stats.base_stat}
      </p>
    </StatDiv>
  );
}
