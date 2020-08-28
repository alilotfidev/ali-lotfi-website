import React from "react";
import '../assets/css/Navbar.css';

const Navbar = ({ scrollTo }) => {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo" onClick={() => {scrollTo('Intro')}}>Ali Lotfi<br/><span>Web Developer</span></div>
        <ul className="links">
          <li className="navLink" onClick={() => {scrollTo('AboutMe')}}>About Me</li>
          <li className="navLink" onClick={() => {scrollTo('Portfolio')}}>Portfolio</li>
          <li className="navLink" onClick={() => {scrollTo('ContactMe')}}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
