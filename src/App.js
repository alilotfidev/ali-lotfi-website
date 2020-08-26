import React, { Component } from "react";
//components
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

//scroll
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  scrollTo = (ComponentName) => {
    if (ComponentName === "AboutMe") {
      scrollToComponent(this.AboutMe, { offset: -80, align: "top" });
    }
  };
  render() {
    return (
      <div className="App">
        <Navbar scrollTo={this.scrollTo} />
        <main>
          <section>
            <Intro scrollTo={this.scrollTo} />
          </section>
          <section
            ref={(section) => {
              this.AboutMe = section;
            }}
          >
            <AboutMe />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
