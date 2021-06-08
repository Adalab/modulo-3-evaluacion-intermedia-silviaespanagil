import React from "react";

import "../stylesheets/App.css";

const Pokedex = (props) => {
  const pokemon = props.pokemons.map((pokemon) => {
    console.log(pokemon);
    return (
      <li key={pokemon.id}>
        <img src={pokemon.url}></img>
        <h3>{pokemon.name}</h3>
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
