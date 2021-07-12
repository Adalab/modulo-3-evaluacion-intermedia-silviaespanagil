import React from "react";
import { Link } from "react-router-dom";

const PokemonDetail = (props) => {
  const pokeType = props.pokeDetail.types.map((type, index) => {
    return (
      <li className="pokedex__card--type" key={index}>
        {type}
      </li>
    );
  });

  const renderEvolution = () => {
    if (props.pokeDetail.evolution === null) {
      return <span>No tiene</span>;
    } else {
      return <span>{props.pokeDetail.evolution}</span>;
    }
  };
  return (
    <>
      <Link to="/">
        <small>Volver</small>
      </Link>
      <article className="pokedex__card">
        <img
          className="pokedex__card--img"
          src={props.pokeDetail.url}
          alt={props.pokeDetail.name}
        ></img>
        <h3 className="pokedex__card--name">{props.pokeDetail.name}</h3>
        <p className="pokedex__card--evolution">
          Evolución: {renderEvolution()}
        </p>
        <ul>{pokeType}</ul>
      </article>
    </>
  );
};

export default PokemonDetail;
