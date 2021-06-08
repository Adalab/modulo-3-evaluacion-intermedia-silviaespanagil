import React from "react";
import "../stylesheets/App.css";

const Pokemon = (props) => {
  return (
    <>
      <article>
        <img src={props.url}></img>
        <h3>{props.name}</h3>
      </article>
    </>
  );
};

export default Pokemon;
