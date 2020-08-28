import React from "react";
import "../assets/css/Portfolio.css";

//import images
import myWebsite from "../assets/images/portfolio/my-website.png"
import WeatherApp from "../assets/images/portfolio/weather-app.png";
import TodoApp from "../assets/images/portfolio/todo-app.png";
import ThemeSwitcher from "../assets/images/portfolio/theme-switcher.png";
import SearchInput from "../assets/images/portfolio/search-input.png";
import ResponsiveFlexbox from "../assets/images/portfolio/responsive-flexbox.png";
import PulsingButton from "../assets/images/portfolio/pulsing-button.png";
import PingPong from "../assets/images/portfolio/ping-pong.png";
import BandAids from "../assets/images/portfolio/band-aids.png";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <h5 className="portfolio-subtitle">My Last Works</h5>
      <div className="portfolio-items">
      <div className="portfolio-item">
          <a
            href="https://alilotfi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={myWebsite} alt="my personal website" />
          </a>
          <a
            href="https://alilotfi.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>My personal website</h6>
          </a>
          <p>ReactJS, Scss</p>
        </div>
        <div className="portfolio-item">
          <a
            href="https://youthful-hypatia-aba0f5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WeatherApp} alt="weather application" />
          </a>
          <a
            href="https://youthful-hypatia-aba0f5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Simple Weather Application</h6>
          </a>
          <p>ReactJS, Scss</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://elated-bhaskara-290e7c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TodoApp} alt="todo application" />
          </a>
          <a
            href="https://elated-bhaskara-290e7c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Simple todo Application</h6>
          </a>
          <p>ReactJS, Materialize Css</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://objective-swirles-9a6f72.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ThemeSwitcher} alt="theme switcher" />
          </a>
          <a
            href="https://objective-swirles-9a6f72.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Dark/Light Theme Switcher</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://competent-ride-c9f737.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SearchInput} alt="search input" />
          </a>
          <a
            href="https://competent-ride-c9f737.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Simple Search Input</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://competent-mcnulty-b9c272.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ResponsiveFlexbox}
              alt="responsive gallery with flexbox"
            />
          </a>
          <a
            href="https://competent-mcnulty-b9c272.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>responsive image gallery</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://codepen.io/alilotfidev/pen/wvGgoQo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PulsingButton} alt="button with pulse animation" />
          </a>
          <a
            href="https://codepen.io/alilotfidev/pen/wvGgoQo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Pulsing button</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>
       
        <div className="portfolio-item">
          <a
            href="https://codepen.io/alilotfidev/pen/mdVKNbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PingPong} alt="ping pong illustration" />
          </a>
          <a
            href="https://codepen.io/alilotfidev/pen/mdVKNbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Ping-Pong Racket</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>

        <div className="portfolio-item">
          <a
            href="https://codepen.io/alilotfidev/pen/mdVKNbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={BandAids} alt="Band Aids illustration" />
          </a>
          <a
            href="https://codepen.io/alilotfidev/pen/mdVKNbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6>Band Aids illustration</h6>
          </a>
          <p>Html/Css, Codepen</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
