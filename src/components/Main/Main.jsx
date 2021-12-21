import React from "react";
import {Routes, Route} from "react-router";
import Home from "../Home"
import Allpokemons from "../Allpokemons"
import Pokebounce from "../Pokebounce"

const Main = () => {
  return <div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/allpokemons" element={<Allpokemons/>} />
    <Route path="/pokebounce" element={<Pokebounce />} />
  </Routes>
  </div>
};

export default Main;
