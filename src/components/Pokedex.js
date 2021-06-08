import React from "react";
import Pokemon from "./Pokemon.js";
import "../stylesheets/App.css";

const Pokedex = (props) => {
  const pokemon = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Pokemon
          id={pokemon.id}
          name={pokemon.name}
          url={pokemon.url}
          type={pokemon.types}
        />
      </li>
    );
  });
  return (
    <>
      <ul>{pokemon}</ul>
    </>
  );
};

export default Pokedex;
