import React from "react";
import '../assets/css/Navbar.css';
import Logo from "../assets/images/logo.png";

const Navbar = ({ scrollTo }) => {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo" onClick={() => {scrollTo('Intro')}}><img src={Logo} alt="ali lotfi"/><div> Ali Lotfi<br/><span>Web Developer</span></div></div>
        <ul className="links">
          {/* <li className="navLink" onClick={() => {scrollTo('AboutMe')}}>About Me</li> */}
          <li className="navLink" onClick={() => {scrollTo('Portfolio')}}>Portfolio</li>
          <li className="navLink" onClick={() => {scrollTo('ContactMe')}}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
