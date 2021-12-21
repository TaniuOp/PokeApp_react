import React, { useState, useEffect } from "react";
import Pokebouncecard from "./Pokebouncecard"
import { useDebounce } from 'use-debounce';

const axios = require('axios');

const Pokebounce = () => {
  // // Estados: uno para input ('') y otro para el array de los pokemons ([]). 
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState([]);
  // Uso del debounce 
  const [searchedPokemon] = useDebounce(search, 1500);


  const paintPokemons = () => {
    return pokedata.map((pokemon, i) => <Pokebouncecard pokemonInfo={pokemon} key={i} />)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchedPokemon !== "") {
          if(pokedata.some(pokemon => pokemon.name === search)){
              console.log("Pokemon exists")
        // Petición a la PokeApi 
      }else{const pokeUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
        // seteamos el objeto del pokemon 
          setPokedata([...pokedata, {
            name: pokeUrl.data.name,
            img: pokeUrl.data.sprites.front_default,
            weight: pokeUrl.data.weight,
            id: pokeUrl.data.id
          }])}
        }
      } catch (e) {
        setPokedata([])
        console.log("This pokemon does not exist or the field is empty")
      }
    } fetchData()
  }, [searchedPokemon])

  return <div className="formDiv">
    <h1>Start writing your battle Pokemons and wait for the magic!</h1>
    <p>If you misspell a Pokemon name, the pokelist will reset to 0</p>
    <form className="formBounce">
      <input type="text" name="pokemonName" id="pokemonName"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        required />
    </form>
    <p>Total pokemons: {pokedata.length}</p>
    {/* Pintamos a los pokemons */}
    {paintPokemons()}
  </div>;
};

export default Pokebounce;
