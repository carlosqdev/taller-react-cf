import React, { useState, useEffect } from "react";
import CharacterProfile from "./CharacterProfile";

import SectionButtons from "./SectionButtons";

function Characters() {
  const [character, setCharacter] = useState(null);
  const [counter, setCounter] = useState(1);

  const minMaxCounter = {
    min: 1,
    max: 826,
  };

  const getCharacter = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  };

  const increment = () => {
    if (counter < minMaxCounter.max) setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > minMaxCounter.min) setCounter(counter - 1);
  };

  useEffect(() => {
    getCharacter(counter);
  }, [counter]);

  return (
    <section>
      <header>
        <h1 className="title">Explorar personajes.</h1>
      </header>
      {character && (
        <CharacterProfile
          photography={character.image}
          name={character.name}
          gender={character.gender}
          origin={character.origin.name}
          species={character.species}
          status={character.status}
        />
      )}
      <SectionButtons
        decrement={decrement}
        increment={increment}
        minMaxCounter={minMaxCounter}
        counter={counter}
      />
    </section>
  );
}

export default Characters;
