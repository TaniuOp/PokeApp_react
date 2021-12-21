import React from "react";

const Pokecard = (props) => {
  return <div className="pokedata">
    <h2>{props.pokemonData.name.toUpperCase()}</h2>
    <h3>Weight: {props.pokemonData.weight}</h3>
    <img className="pokeimg" src={props.pokemonData.img} alt="" />
    <h3>ID: {props.pokemonData.id}</h3>
  </div>;
};

export default Pokecard;
