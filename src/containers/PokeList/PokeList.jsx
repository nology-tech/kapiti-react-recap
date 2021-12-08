import React, { useEffect, useState } from "react";

import PokeTile from "../../components/PokeTile/PokeTile";

const PokeList = () => {
  const [pokemon, setPokemon] = useState({ results: [] });
  const [URL, setURL] = useState(`https://pokeapi.co/api/v2/pokemon`);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(pokemon => {
        console.log(pokemon);
        setPokemon(pokemon);
      });
  }, [URL]);

  const handleClick = () => {
    setURL(pokemon.next);
  };

  const pokeTilesJSX = pokemon.results.map((pokemon, index) => {
    return <PokeTile key={"poketile" + index} name={pokemon.name} />;
  });

  return (
    <>
      <div>{pokeTilesJSX}</div>
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default PokeList;
