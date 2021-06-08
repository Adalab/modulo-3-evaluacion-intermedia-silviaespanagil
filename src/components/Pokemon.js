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
        <img
          className="pokedex__card--img"
          src={props.url}
          alt={props.name}
        ></img>
        <h3 className="pokedex__card--name">{props.name}</h3>
        <div>{pokeType}</div>
      </article>
    </>
  );
};

export default Pokemon;
