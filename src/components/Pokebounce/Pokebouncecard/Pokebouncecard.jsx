import React from "react";

const Pokebouncecard = (props) => {
  return <div className="pokeContainer">
    <div className="pokecards">
      <h2>{props.pokemonInfo.name.toUpperCase()}</h2>
      <h3>ID: {props.pokemonInfo.id}</h3>
      <h3>Weight: {props.pokemonInfo.weight}</h3>
      <img src={props.pokemonInfo.img} alt="" />
    </div>
  </div>;
};

export default Pokebouncecard;
