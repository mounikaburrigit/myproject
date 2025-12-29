import React from "react";
import Navbar from "./Navbar";

import Profile from "./Profile";

import About from "./About";

import Work from "./work";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
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
