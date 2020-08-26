import React from "react";
import "../assets/css/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h2 className="about-me-title">About Me</h2>
      <h4>
        If you’re <span>wondering</span> who I am…
      </h4>
      <div className="about-me-details">
        <p>
          I'm <span>Ali</span>, a <span>self-taught</span> Front-End developer
          who loves to learn new things. I am from <span>Iran</span>.
        </p>
        <p>
          Two years ago I started learning <span>programming</span> and learning
          programming made me feel <span>very good</span>.
        </p>
        <p>
          At that time, I started learning Java and after about a year, I
          developed my <span>first Android application</span>. I worked with
          Java for a while, but then I became familiar with
          <span>JavaScript</span> and chose it to continue
          <span>my Way</span> as a <span>front-end developer</span>, and I found
          that I was <span>more interested</span> in this language.
        </p>
        <p>
          After learning HTML, CSS, and JavaScript, I learned the
          <span>React library</span>
          and I am currently working as a front end developer. I love my job.
        </p>
        <p>
          I took online courses like:
          <a href="https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/">
            Modern JavaScript (from Novice to Ninja)
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G">
            HTML & CSS Crash Course Tutorial
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG">
            Complete React Tutorial (& Redux )
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=Oi4v5uxTY5o&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3">
            React, Redux & Firebase App Tutorial
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR">
            Git & GitHub Tutorial for Beginners
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=x7tLPhnA06w&list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY">
            CSS Grid Tutorial
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA">
            SASS Tutorial
          </a>
          ,
          <a href="https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG">
            CSS Flexbox Tutorial
          </a>
          ,and reading a lot of articles and also watched countless youtube
          videos javaScript and web development.
        </p>
        <p>
          Because nothing helps to learn more than doing a project. I did a lot
          of small personal projects, some of which you can see in the
          <span>portfolio</span>
          section.
        </p>
        <p>
          I like to learn more and do more every day and I think everyone can
          achieve their dreams if they want to.
        </p>
        <p>
          I’m <strong>hard working</strong>, <strong>super curious</strong>,
          <strong>passionate</strong>, <strong>committed</strong>, and also a
          <strong>fast learner!</strong>
        </p>
      </div>
      <h2 className="stack">
        My current <span>stack</span> of <span>languages</span> or
        <span>technologies</span> is:
      </h2>
      <strong className="technologies">
        HTML-CSS-SASS-JAVASCRIPT-REACTJS-REDUX-Firebase-Babel-Git
      </strong>
      <button className="btn-primary resume"><a href="#">my resume</a></button>
    </div>
  );
};
export default AboutMe;
