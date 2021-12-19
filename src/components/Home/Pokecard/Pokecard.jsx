import React from "react";

const Pokecard = (props) => {
  return <div>
    <h2>{props.pokemonData.name}</h2>
    <h3>{props.pokemonData.id}</h3>
    <h3>{props.pokemonData.weight}</h3>
    <img src={props.pokemonData.img} alt="" />
  </div>;
};

export default Pokecard;
