import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
  noCopy = () => {
    alert("merci de ne pas copier le texte");
  };

  // addStyle = (e) => {
  //   console.log(e.target);

  //   if (e.target.classList.contains("styled")) {
  //     e.target.classList.remove("styled");
  //   } else {
  //     e.target.classList.add("styled");
  //   }
  // };

  render() {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <h1 style={{ lineHeight: "60px" }}>{this.props.title}</h1>

        <p onCopy={this.noCopy}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <Car color="red">Ford</Car>
        <Car color="">Mercedes</Car>
        <Car color="green"></Car>
      </div>
    );
  }
}

export default Mycars;
