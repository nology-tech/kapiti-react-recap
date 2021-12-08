import React, { useState, useEffect } from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import PokeCard from "../../components/PokeCard/PokeCard";

const SearchPokemon = () => {
  const [searchTerm, setSearchTerm] = useState("metapod");
  const [pokemon, setPokemon] = useState(null);
  //https://pokeapi.co/api/v2/pokemon/

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    fetch(URL)
      .then(response => response.json())
      .then(pokemon => {
        setPokemon(pokemon);
      });
  }, [searchTerm]);

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    setSearchTerm(inputValue);
  };

  return (
    <div>
      <h1>Search for Pokemon</h1>
      <SearchBox handleSubmit={handleSubmit} searchTerm={searchTerm} />
      {pokemon && <PokeCard name={pokemon.name} imageURL={pokemon.sprites.front_default} />}
    </div>
  );
};

export default SearchPokemon;
