import React from 'react';
import './CoffeeCard.scss';
import { useDispatch } from 'react-redux';
import { removeCoffee } from '../../actions/coffee';

const CoffeeCard = ({ id, title, imageUrl, price }) => {
  const dispatch = useDispatch();

  const handleRemove = event => {
    event.preventDefault();
    dispatch(removeCoffee(id));
  };

  const content = (
    <div className='col-lg-3 col-md-3'>
      <div className='card-type-2'>
        <div className='img-c'>
          <img src={imageUrl} width='800' height='800' />
        </div>
        <div className='clear-line' />
        <h4>{title}</h4>
        <p>Price: {price}$</p>
        <button className='btn btn-primary' onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );

  return content;
};

export default CoffeeCard;
