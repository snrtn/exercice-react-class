import React from "react";

const Cars = ({ children, color }) => {
  const colorInfo = color ? <p>Color: {color}</p> : <p>Color: blanche</p>;

  if (children) {
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
        <p>Marque: {children}</p>
        {colorInfo}
      </div>
    );
  } else {
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
        <p>Pas de data</p>
      </div>
    );
  }
};

export default Cars;
