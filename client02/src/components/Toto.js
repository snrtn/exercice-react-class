import React from "react";

const Toto = (props) => {
  const btn = props.leState.messageMaman !== null ? <button onClick={props.reponseToto()}>Reponce</button> : <button disabled>Reponce</button>;

  return (
    <div>
      <h2>{props.name}</h2>
      {btn}
      <p>{props.leState.messageToto}</p>
    </div>
  );
};

export default Toto;
