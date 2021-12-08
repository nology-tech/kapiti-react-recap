import "./App.css";

import SearchPokemon from "./containers/SearchPokemon/SearchPokemon";
import PokeList from "./containers/PokeList/PokeList";

const App = () => {
  return (
    <>
      <SearchPokemon />
      <PokeList />
    </>
  );
};

export default App;
