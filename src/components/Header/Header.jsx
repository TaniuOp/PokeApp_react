import React from "react";
import Nav from "../Nav"
import "./Header.css"
import logo from '../../logo.svg';



const Header = () => {
  return <div className="header">
    <img src={logo} className="App-logo" alt="logo" />
    <Nav />
  </div>;
};

export default Header;
