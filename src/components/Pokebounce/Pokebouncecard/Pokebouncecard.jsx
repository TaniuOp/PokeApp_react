import React from "react";

const Pokebouncecard = (props) => {
  return <div className="pokeContainer">
    <div className="pokecards">
      <h2>{props.pokemonInfo.name.toUpperCase()}</h2>
      <h3>Weight: {props.pokemonInfo.weight}</h3>
      <img className="pokeimg" src={props.pokemonInfo.img} alt="" />
      <h3>ID: {props.pokemonInfo.id}</h3>
    </div>
  </div>;
};

export default Pokebouncecard;
