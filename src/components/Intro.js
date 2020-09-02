import React from "react";
import "../assets/css/Intro.css";
import DownArrow from "../assets/images/arrow.svg";
import Logo from "../assets/images/logo.png";

const Intro = ({ scrollTo }) => {
  return (
    <div className="intro">
      <div className="intro-texts">
        <h2>
          I'm <span>Ali</span>
        </h2>
        <p className="details">
          A <strong>Hard-working</strong> Front-End Developer based in Iran.
        </p>
        <button
          className="btn-primary"
          onClick={() => {
            scrollTo("AboutMe");
          }}
        >
          About Me
        </button>
      </div>
      <img className="big-logo-image" src={Logo} alt="Ali Lotfi" />
      <img
        className="down-arrow"
        src={DownArrow}
        alt="go down"
        onClick={() => {
          scrollTo("AboutMe");
        }}
      />
    </div>
  );
};

export default Intro;
