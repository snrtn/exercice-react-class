import React, { Component } from "react";
import Mycars from "./components/Mycars";

class App extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {

  //   };
  // }

  state = {
    title: "Mon Catalogue Voiture",
  };

  changeTitle = (e) => {
    this.setState({
      title: "Mon nouveau title",
    });
  };

  changeViaparam = (title) => {
    this.setState({
      title: title,
    });
  };

  changeViaBind = (parm) => {
    this.setState({
      title: parm,
    });
  };

  changeViaInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div className="App" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Mycars title={this.state.title} />

        <button onClick={this.changeTitle} style={{ width: "400px" }}>
          Changer le npm en dur
        </button>
        <button onClick={() => this.changeViaparam("title via un parm")} style={{ width: "400px" }}>
          via a parm
        </button>
        <button onClick={this.changeViaBind.bind(this, "title via bind")} style={{ width: "400px" }}>
          via a bind
        </button>
        <input type="text" onChange={this.changeViaInput} value={this.state.title} style={{ width: "400px" }} />
      </div>
    );
  }
}

export default App;
