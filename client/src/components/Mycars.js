import React, { Component } from "react";

class Mycars extends Component {
  state = {
    voitures: [
      { nmae: "Ford", color: "red", year: 2000 },
      { nmae: "Mercedes", color: "black", year: 2010 },
      { nmae: "LG", color: "", year: 2018 },
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
    const year = new Date().getFullYear();

    return (
      <div>
        <h1>{this.state.title}</h1>

        <button onClick={this.addTenYear()}> + 10 ans</button>

        {this.state.voitures.map((voiture, index) => {
          return (
            <div key={index}>
              <car nmae={voiture.nmae} color={voiture.color} year={year - voiture.year + "ans"} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Mycars;
