import React from "react";
import "../stylesheets/App.css";

const Pokemon = (props) => {
  return (
    <>
      <article>
        <li key={props.id}>
          <img src={props.url}></img>
          <h3>{props.name}</h3>
        </li>
      </article>
    </>
  );
};

export default Pokemon;
