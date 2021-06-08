import React from "react";
import "../stylesheets/App.css";

const Pokemon = (props) => {
  const pokeType = props.type.map((type, index) => {
    console.log(type);
    return <li key={index}>{type}</li>;
  });
  return (
    <>
      <article>
        <img src={props.url}></img>
        <h3>{props.name}</h3>
        {pokeType}
      </article>
    </>
  );
};

export default Pokemon;
