import React, { Component } from "react";
//components
import Navbar from "./components/Navbar";
import Intro from './components/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Intro />
        </main>
      </div>
    );
  }
}

export default App;
