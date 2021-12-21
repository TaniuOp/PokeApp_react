import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return <div>
     <ul className="nav">
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/allpokemons">Pokelist</Link></li>
        <li><Link to="/pokebounce">Bounce</Link></li>
      </ul>
  </div>;
};

export default Nav;
