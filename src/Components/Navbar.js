import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="Navbar">
        <div>
          <h1>Navbar</h1>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
