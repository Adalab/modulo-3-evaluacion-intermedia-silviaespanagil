import React, { useState } from "react";
import data from "../data/data.json";
import PokeList from "./PokeList.js";
import PokemonDetail from "./PokemonDetail.js";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";

function App() {
  const [pokemons] = useState(data);
  const [favorites, setFavorites] = useState([]);

  const renderPokeDetail = (routerProps) => {
    const routerpokeId = routerProps.match.params.pokeId;

    const pokeFound = pokemons.find(
      (pokemon) => pokemon.id === parseInt(routerpokeId)
    );
    console.log(pokeFound);
    console.log(routerpokeId);
    if (pokeFound) {
      return <PokemonDetail pokeDetail={pokeFound} />;
    } else {
      return <p>No hay pokemones</p>;
    }
  };
  const favPokemon = (clickedPokemon) => {
    const pokemonFavorited = pokemons.find(
      (pokemon) => pokemon.id === clickedPokemon
    );
    // console.log("hice click");
    // console.log(pokemonFavorited);
    // console.log(favorites);
    // console.log(pokemons);
    // console.log(clickedPokemon);
    if (!favorites.includes(pokemonFavorited)) {
      setFavorites([...favorites, pokemonFavorited]);
      return;
    }
    const newFavoriters = favorites.filter(
      (pokemon) => pokemon.id !== clickedPokemon
    );
    setFavorites(newFavoriters);
  };
  return (
    <>
      {
        <Switch>
          {/*HOME LISTA COMPLETA */}
          <Route exact path="/">
            <PokeList pokemons={data} favPokemon={favPokemon} />;
          </Route>

          {/*DETALLE */}
          <Route path="/pokemon/:pokeId" render={renderPokeDetail} />
        </Switch>
      }
    </>
  );
}

export default App;
