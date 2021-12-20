import React from "react";
import Nav from "../Nav"
import "./Header.css"
import logo from '../../logo.svg';



const Header = () => {
  return <div className="header">
    <img src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg'} className="App-logo" alt="logo" />
    <Nav />
  </div>;
};

export default Header;
