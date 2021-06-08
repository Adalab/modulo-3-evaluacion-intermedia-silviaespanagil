import React from "react";
import "../stylesheets/App.css";

const Pokemon = (props) => {
  const pokeType = props.type.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <>
      <article>
        <h3>{props.name}</h3>
        <img src={props.url} alt={props.name}></img>
        {pokeType}
      </article>
    </>
  );
};

export default Pokemon;
