import React from "react";

const Cars = ({ color, name, year }) => {
  const colorInfo = color ? <p>Color: {color}</p> : <p>Color: blanche</p>;

  if (name) {
    return (
      <div>
        <p>Marque: {name}</p>
        <p>age: {year}</p>
        {colorInfo}
      </div>
    );
  } else {
    return null;
  }
};

export default Cars;
