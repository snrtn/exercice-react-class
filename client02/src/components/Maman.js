import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null,
  };

  ordreMaman = () => {
    this.setState({
      messageMaman: "Va tanger ta chambre",
    });
  };

  reponseToto = () => {
    this.setState({
      messageToto: "Oui, maman",
    });
  };

  render() {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={this.ordreMaman}>Ordre de la Maman</button>
        <p>{this.state.messageMaman}</p>

        <Toto name="Toto" reponseToto={this.reponseToto} leState={this.state} />
      </div>
    );
  }
}

export default Maman;
