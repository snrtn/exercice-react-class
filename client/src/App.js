import React, { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} />
      </div>
    );
  }
}

export default App;
