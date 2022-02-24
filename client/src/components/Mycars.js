import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { name: "Ford", color: "red", year: 2000 },
      { name: "Mercedes", color: "black", year: 2010 },
      { name: "LG", color: "", year: 2018 },
    ],
    title: "Mon Catalogue Voiture",
  };

  addTenYear = () => {
    const updatedState = this.state.voitures.map((param) => {
      return (param.year -= 10);
    });

    this.setState({
      updatedState,
    });
  };

  render() {
    const year = new Date().getFullYear;

    return (
      <div>
        <h1>{this.state.title}</h1>

        <button onClick={this.addTenYear}> + 10 ans</button>

        <table />

        {this.state.voitures.map((voiture, index) => {
          return (
            <div key={index}>
              <Cars name={voiture.name} color={voiture.color} year={year - voiture.year + "ans"} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
