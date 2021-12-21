import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Pokecardlist from "./Pokecardlist"
const axios = require('axios');


const Allpokemons = () => {
  // // Estados: uno para input ('') y otro para el array de los pokemons ([]). 
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState([]);

  // // Uso de FormBuilder 
  const { register, handleSubmit } = useForm();

  // Hacemos manejo del Submit 
  const onSubmit = (data, e) => {
    setSearch(data.pokemon)
    e.target.pokemon.value = ""
  };

  // Hacemos el fetch y actualizamos el estado con un useEffect que equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // some: metodo de obj igual al find 
        if(pokedata.some(pokemon => pokemon.name === search)){
          console.log("Pokemon exists")
          // Petición a la PokeApi 
        }else{
          const pokeUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
          // seteamos el objeto del pokemon 
          setPokedata([...pokedata, {
            name: pokeUrl.data.name,
            img: pokeUrl.data.sprites.front_default,
            weight: pokeUrl.data.weight,
            id: pokeUrl.data.id
          }])}
        }catch (e) {
        setPokedata([])
        console.log("This pokemon does not exist or the field is empty")
      }
    } fetchData()
  }, [search])

  console.log(pokedata)

  return <div className="formDiv">
    <h1>Pokemon battle</h1>
    <p>Create you battle team! You can select more than one</p>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Pokemon" {...register("pokemon", { required: true })} />
      <input type="submit" />
    </form>
    {/* Pintamos a los pokemons */}
    <div className="pokeContainer">
      {pokedata.map((pokemon, i) => <Pokecardlist pokemonInfo={pokemon} key={i} />)}
    </div>
  </div>;

};

export default Allpokemons;




