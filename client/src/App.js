import React, { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Mycars />
      </div>
    );
  }
}

export default App;
