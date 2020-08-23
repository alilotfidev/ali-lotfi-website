import React from "react";
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo">Ali Lotfi</div>
        <ul className="links">
          <li className="navLink">About Me</li>
          <li className="navLink">Portfolio</li>
          <li className="navLink">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
