import React from "react";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
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
      <h1 className="title">Mi lista de Pokemon</h1>
      <ul className="pokedex">{pokemon}</ul>
    </>
  );
};

export default PokeList;
