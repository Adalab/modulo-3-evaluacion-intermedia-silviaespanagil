import React from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon.js";

const PokeList = (props) => {
  const favoritesPokedex = props.favorites.map((favorite, id) => {
    return (
      <>
        <li key={id} className="favorites__pokemons--card">
          <h3 className="favorites__pokemons--card-title">{favorite.name}</h3>
          <img src={favorite.url} alt={favorite.name} />
        </li>
      </>
    );
  });

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

  if (favoritesPokedex.length !== 0) {
    return (
      <>
        <h1 className="title">Mi lista de Pokemon</h1>
        <section className="main__wrapper">
          <ul className="pokedex">{pokemon}</ul>
          <div className="favorites">
            <h2 className="favorites__title">Mi Pokedex</h2>
            <ul className="favorites__pokemons">{favoritesPokedex}</ul>
          </div>
        </section>
      </>
    );
  } else
    return (
      <>
        <h1 className="title">Mi lista de Pokemon</h1>
        <section className="main__wrapper">
          <ul className="pokedex">{pokemon}</ul>
        </section>
      </>
    );
};

export default PokeList;
