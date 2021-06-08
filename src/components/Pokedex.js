import React from "react";

import "../stylesheets/App.css";

const Pokedex = (props) => {
  const pokemon = props.pokemons.map((pokemon) => {
    return <li>{pokemon.id}</li>;
  });
  return (
    <>
      <ul>{pokemon}</ul>
    </>
  );
};

export default Pokedex;
