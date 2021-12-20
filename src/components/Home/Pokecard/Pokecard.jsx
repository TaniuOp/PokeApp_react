import React from "react";

const Pokecard = (props) => {
  return <div>
    <h2>Name: {props.pokemonData.name}</h2>
    <h3>ID: {props.pokemonData.id}</h3>
    <h3>Weight: {props.pokemonData.weight}</h3>
    <img src={props.pokemonData.img} alt="" />
  </div>;
};

export default Pokecard;
