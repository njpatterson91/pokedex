import React, { useState } from "react"; /* STEP 0 */

export default function Search({ setPokemon }) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = (evt) => {
    const { value } = evt.target;
    return setInputValue(value);
  };
  const search = () => {
    return setPokemon(inputValue.toLowerCase());
  };
  return (
    <div>
      <div>
        <input
          id="input"
          type="text"
          onChange={changeInput}
          value={inputValue}
        />{" "}
        <button id="resetInput" onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
}
