import React from "react";
import Stat from "./stat";
import styled from "styled-components";

const MainDiv = styled.div`
  max-width: 1000%;
`;

export default function Stats({ stats }) {
  return (
    <MainDiv>
      {stats.map((stat) => (
        <Stat key={stat.stat.name} stats={stat} />
      ))}
    </MainDiv>
  );
}
