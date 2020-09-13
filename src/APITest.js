import React, { useState, useEffect } from "react";
import axios from "axios";
import Moves from "./Moves";
import Stats from "./stats";
import styled from "styled-components";
import Search from "./Search";

const MainDiv = styled.div`
  background-color: grey;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  div img {
    margin-top: 5%;
  }
`;

export default function APITest() {
  const [testApi, setTestApi] = useState("");
  const [imgState, setImgState] = useState("");
  const [moveState, setMoveState] = useState([]);
  const [statsState, setStatsState] = useState([]);
  const [pokemon, setPokemon] = useState("pikachu");
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        setTestApi(res.data);
        setImgState(res.data.sprites.other.dream_world.front_default);
        setMoveState(res.data.moves);
        setStatsState(res.data.stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon]);
  return (
    <div>
      <h1>Pokedex</h1>
      <Search setPokemon={setPokemon} />
      <MainDiv>
        <div>
          <img alt={testApi.name} src={imgState}></img>
        </div>
        <div>
          <h2>{testApi.name}</h2>
          <h3>Stats</h3>
          <Stats stats={statsState} />
        </div>
      </MainDiv>
      <hr />
      <h3>List of compatable Moves</h3>
      <Moves move={moveState} />
    </div>
  );
}
