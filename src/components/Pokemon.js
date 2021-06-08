import React from "react";

const Pokemon = (props) => {
  const pokeType = props.type.map((type, index) => {
    return (
      <li className="pokedex__card--type" key={index}>
        {type}
      </li>
    );
  });
  return (
    <>
      <article className="pokedex__card">
        <h3 className="pokedex__card--name">{props.name}</h3>
        <img
          className="pokedex__card--img"
          src={props.url}
          alt={props.name}
        ></img>
        <div>{pokeType}</div>
      </article>
    </>
  );
};

export default Pokemon;
