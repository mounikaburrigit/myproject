import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const connectwithme = () => {
    window.open("https://www.naukri.com/mnjuser/profile", "_blank");
  };

  return (
    <div className="navbar">
      <div className="logo-text"><span>MB</span></div>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <button className="connect-button" onClick={connectwithme}>
          Connect with me
        </button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>
    </div>
  );
}

export default Navbar;
