import React from "react";
import PokeList from "./PokeList.js";
import pokemons from "../data/data.json";
import "../stylesheets/App.scss";

function App() {
  return <PokeList pokemons={pokemons} />;
}

export default App;
