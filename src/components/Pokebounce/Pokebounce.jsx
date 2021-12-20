import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Pokebouncecard from "./Pokebouncecard"
import { useDebounce } from 'use-debounce';

const axios = require('axios');


const Pokebounce = () => {
  // // Estados: uno para input ('') y otro para el array de los pokemons ([]). 
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState([]);
  // Uso del debounce 
  const [searchedPokemon] = useDebounce(search, 1000);

  // // Uso de FormBuilder 
  const { register, handleSubmit } = useForm();

  // Hacemos manejo del Submit 
  // const onSubmit =  (data, e) => {
  //   setSearch(data.pokemon)
  //   e.target.pokemon.value = ""
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición a la PokeApi 
        const pokeUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
        // seteamos el objeto del pokemon 
        setPokedata([...pokedata, {
          name: pokeUrl.data.name,
          img: pokeUrl.data.sprites.front_default,
          weight: pokeUrl.data.weight,
          id: pokeUrl.data.id
        }])
      } catch (e) {
        setPokedata([])
        console.log("This pokemon does not exist or the field is empty")
      }
    } fetchData()
  }, [searchedPokemon])

  console.log(pokedata)


  return <div className="formDiv">
    <h1>Start writing your battle Pokemons and wait for the magic!</h1>
    <p>If you misspell a Pokemon name, the list resets</p>
    <form className="formBounce">
      <input type="text" name="pokemonName" id="pokemonName"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        required />
    </form>
    {/* Pintamos a los pokemons */}
    <p>Total: {pokedata.length}</p>
    {pokedata.map((pokemon, i) => <Pokebouncecard pokemonInfo={pokemon} key={i} />)}
  </div>;
};

export default Pokebounce;
