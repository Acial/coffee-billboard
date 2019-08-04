import React from "react";
import "./CoffeeCard.scss";
import { useDispatch } from 'react-redux';
import { removeCoffee } from '../../actions/coffee';

const CoffeeCard = ({ id, title, imageUrl, price }) => {
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.preventDefault();
    dispatch(removeCoffee(id));
  }

  const content = (
    <div className="coffee-card">
      <button onClick={handleRemove}>Remove</button> 
      <img className="coffee-image" src={imageUrl} />
      <h1>{title}</h1>
      <p>Price: {price}$</p>
    </div>
  );

  return content;
};

export default CoffeeCard;
