import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  const pokemon = props.pokemons.map((pokemon, id) => {
    const isFavorite = props.favorites.find(
      (favorite) => favorite.id === pokemon.id
    );
    return (
      <li key={pokemon.id}>
        <button
          id={pokemon.id}
          onClick={() => props.favPokemon(pokemon.id)}
          className="pokedex__card--fav"
        >
          <i
            className={
              isFavorite
                ? "fas fa-lg fa-heart pokedex__card--fav"
                : "far fa-lg fa-heart pokedex__card--fav "
            }
          ></i>
        </button>

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
