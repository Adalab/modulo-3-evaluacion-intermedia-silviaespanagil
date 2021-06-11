import React, { useState } from "react";
import data from "../data/data.json";
import PokeList from "./PokeList.js";
import PokemonDetail from "./PokemonDetail.js";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";

function App() {
  const [pokemons] = useState(data);

  const renderPokeDetail = (routerProps) => {
    const routerpokeId = routerProps.match.params.pokeId;

    const pokeFound = pokemons.find(
      (pokemon) => pokemon.id === parseInt(routerpokeId)
    );
    console.log(pokemons);
    console.log(routerpokeId);
    if (pokeFound) {
      return <PokemonDetail pokeDetail={pokeFound} />;
    } else {
      return <p>No hay pokemones</p>;
    }
  };

  return (
    <>
      {
        <Switch>
          {/*HOME LISTA COMPLETA */}
          <Route exact path="/">
            <PokeList pokemons={data} />;
          </Route>
          {/*DETALLE */}
          <Route path="/pokemon/:pokeId" render={renderPokeDetail} />
        </Switch>
      }
    </>
  );
}

export default App;
