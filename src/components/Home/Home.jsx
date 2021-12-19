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


    // Hacemos el fetch y actualizamos el estado 

    const onSubmit =  (data) => {
      setSearch(data.pokemon)
      console.log(search);
    };
  
  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const json = res.data;
        console.log(json)

        setPokedata({
          name: json.name, 
          img: json.sprites.front_default,
          weight: json.weight,
          id: json.id
        })
      }catch(e){
        setPokedata([]) 
      }
    } fetchData()
  },[search])
  


  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Pokemon" {...register("pokemon", { required: true })} />
      <input type="submit" />
      {/* Pasar props al hijo */}
        <Pokecard pokemonData={pokedata} />     
    </form>
  </div>;
}



export default Home;
