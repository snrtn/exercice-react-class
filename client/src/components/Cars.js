import React from "react";

const Cars = ({ nmae, color, year }) => {
  const colorInfo = color ? <p>Color: {color}</p> : <p>Color: blanche</p>;

  if (nmae) {
    return (
      <div>
        <p>Marque: {nmae}</p>
        <p>age: {year}</p>
        {colorInfo}
      </div>
    );
  } else {
    return null;
  }
};

export default Cars;
