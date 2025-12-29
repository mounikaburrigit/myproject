import React from "react";
import logoImg from "./assets/logoImg.jpg";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const connectwithme = () => {
    window.open("https://www.naukri.com/mnjuser/profile", "_blank");
  };
  return (
    <div className="navbar">
      <img src={logoImg} className="image-logo" alt="" />
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
         
      </ul>
      <div className="nav-connect">
        <button className="connect-button" onClick={connectwithme}>
          Connect with me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
