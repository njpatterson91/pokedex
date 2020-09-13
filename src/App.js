import React from "react";
import "./App.css";
import APITest from "./APITest";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 5px solid black;
  border-radius: 10px;
`;

function App() {
  return (
    <StyledDiv className="App">
      <APITest />
    </StyledDiv>
  );
}

export default App;
