import React, { useState, useEffect } from "react";
import axios from "axios";
import Moves from "./Moves";
import Stats from "./stats";
import styled from "styled-components";
import Search from "./Search";

const MainDiv = styled.div`
  background-color: grey;
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 5%;
  div {
    display: flex;
    flex-flow: column nowrap;
    max-width: 50%;
  }
  div img {
    margin-top: 5%;
    max-width: 100%;
  }
  div p {
    max-width: 100%;
    text-align: center;
  }
  div hr {
    color: white;
    width: 100%;
  }
`;

export default function APITest() {
  const [testApi, setTestApi] = useState("");
  const [imgState, setImgState] = useState("");
  const [moveState, setMoveState] = useState([]);
  const [statsState, setStatsState] = useState([]);
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonID, setPokemonID] = useState(25);
  const [pokemonIDInfo, setPokemonIDInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(
        (res) => {
          setTestApi(res.data);
          setImgState(res.data.sprites.other["official-artwork"].front_default);
          setMoveState(res.data.moves);
          setStatsState(res.data.stats);
          setPokemonID(res.data.id);
          axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`)
            .then((res) => {
              setPokemonIDInfo(res.data.flavor_text_entries[1].flavor_text);
              //console.log(res.data.flavor_text_entries[1].flavor_text);
            })
            .catch((err) => console.log(err));
        },
        [pokemonID]
      )
      .catch((err) => {
        console.log(err);
      });
  }, [pokemon, pokemonID]);
  return (
    <div>
      <h1>Pokedex</h1>
      <Search setPokemon={setPokemon} />
      <MainDiv>
        <div>
          <h2>{testApi.name}</h2>
          <img alt={testApi.name} src={imgState}></img>
          <p>{pokemonIDInfo}</p>
          <hr />
        </div>
        <div>
          <h3>Base Stats</h3>
          <Stats stats={statsState} />
        </div>
      </MainDiv>
      <hr />
      <h3>List of compatable Moves</h3>
      <Moves move={moveState} />
    </div>
  );
}
