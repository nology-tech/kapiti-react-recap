import React from "react";

const PokeCard = props => {
  const { name, imageURL } = props;
  return (
    <div>
      <h2>{name}</h2> <img src={imageURL} />
    </div>
  );
};

export default PokeCard;
