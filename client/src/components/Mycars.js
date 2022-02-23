import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Car color="red">Ford</Car>
        <Car color="">Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
