import React from "react";
import Navbar from "./Navbar.jsx";
import Profile from "./Profile.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
