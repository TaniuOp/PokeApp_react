import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Pokecard from "./Pokecard"

const axios = require('axios');


const Home = () => {

  // Estados: uno para input ('') y otro para un pokemon ({}). 
  const [search, setSearch] = useState("");
  const [pokedata, setPokedata] = useState([]);

  // Uso de FormBuilder 
  const { register, handleSubmit } = useForm();


  // Hacemos manejo del Submit 
    const onSubmit =  (data, e) => {
      setSearch(data.pokemon.toLowerCase());
      console.log(data)
      e.target.pokemon.value = ""
      // console.log(search);
    };
  
  // Hacemos el fetch y actualizamos el estado con un useEffect que equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición a la PokeApi 
        const pokeUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
        console.log(pokeUrl.data)
        // seteamos el objeto del pokemon 
        setPokedata({
          name: pokeUrl.data.name, 
          img: pokeUrl.data.sprites.front_default,
          weight: pokeUrl.data.weight,
          id: pokeUrl.data.id
        })

      }catch(e){
        setPokedata([]) 
        console.log("This pokemon does not exist. Try a new one! Ej: ditto")
      }
    } fetchData()
  },[search])
  
  return <div className="formDiv">
    <h1>Search your favorite Pokemon</h1>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Ej: Pikachu" {...register("pokemon", { required: true })} />
      <input type="submit" />
    </form>
        <> {pokedata.name? <Pokecard pokemonData={pokedata}/> : "" } </>       
  </div>;
}



export default Home;
