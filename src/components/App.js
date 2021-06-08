import React from "react";
import Pokedex from "./Pokedex.js";
import pokemons from "../data/data.json";
import "../stylesheets/App.scss";

function App() {
  return <Pokedex pokemons={pokemons} />;
}

export default App;
