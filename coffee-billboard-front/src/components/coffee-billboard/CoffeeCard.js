import React from "react";
import "./CoffeeCard.scss";

const CoffeeCard = ({ title, imageUrl, price }) => {
  const content = (
    <div className="coffee-card">
      <img className="coffee-image" src={imageUrl} />
      <h1>{title}</h1>
      <p>Price: {price}$</p>
    </div>
  );

  return content;
};

export default CoffeeCard;
