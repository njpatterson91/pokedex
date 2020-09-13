import React, { useState, useEffect } from "react"; /* STEP 0 */

export default function Search({ setPokemon }) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = (evt) => {
    const { value } = evt.target;
    return setInputValue(value);
  };
  const search = () => {
    return setPokemon(inputValue.toLowerCase());
  };

  useEffect(() => {
    const searchEvent = (event) => {
      if (event.key === "Enter") {
        setPokemon(inputValue.toLowerCase());
      }
    };
    window.addEventListener("keydown", searchEvent);
    return () => {
      window.removeEventListener("keydown", searchEvent);
    };
  }, [inputValue]);
  return (
    <div>
      <div id="searchDiv">
        <input
          id="input"
          className="input"
          type="text"
          onChange={changeInput}
          value={inputValue}
          placeholder="Type to Search"
        />{" "}
        <button id="resetInput" onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
}
