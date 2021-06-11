import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  const pokemon = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id}>
        <Link to={`./pokemon/${pokemon.id}`}>
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            url={pokemon.url}
            type={pokemon.types}
          />
        </Link>
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
