import React, { Component } from "react";
//components
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

//scroll
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  scrollTo = (ComponentName) => {
    switch (ComponentName) {
      case "AboutMe": {
        scrollToComponent(this.AboutMe, { offset: -80, align: "top" });
        break;
      }
      case "Portfolio": {
        scrollToComponent(this.Portfolio, { offset: -80, align: "top" });
        break;
      }
      case "ContactMe": {
        scrollToComponent(this.ContactMe, { offset: -80, align: "top" });
        break;
      }
      case "Intro": {
        scrollToComponent(this.Intro, { offset: -80, align: "top" });
        break;
      }
      default: {
        break;
      }
    }
  };
  render() {
    return (
      <div className="App">
          <Navbar scrollTo={this.scrollTo} />
        <main>
          <section ref={section => {this.Intro = section}}>
            <Intro scrollTo={this.scrollTo} />
          </section>
          <section
            ref={(section) => {
              this.AboutMe = section;
            }}
          >
            <AboutMe />
          </section>
          <section
            ref={(section) => {
              this.Portfolio = section;
            }}
          >
            <Portfolio />
          </section>
          <section
            ref={(section) => {
              this.ContactMe = section;
            }}
          >
            <ContactMe />
          </section>
        </main>
        <footer>
          <div className="logo">Ali Lotfi</div>
          <div className="job-name">Front-End Developer</div>
          <div className="copy-right">COPYRIGHT © 2020, Ali</div>
        </footer>
      </div>
    );
  }
}

export default App;
