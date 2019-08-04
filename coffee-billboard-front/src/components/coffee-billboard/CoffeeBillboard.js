import React from 'react';
import CoffeeCard from './CoffeeCard';

const CoffeeBillboard = ({ coffees }) => {
  const content = (
    <div>
      <div className='container'>
        <div className='row'>
          {coffees &&
            coffees.map((coffee, index) => {
              return (
                <CoffeeCard
                  key={index}
                  index={index}
                  id={coffee.id}
                  title={coffee.title}
                  imageUrl={coffee.imageUrl}
                  price={coffee.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );

  return content;
};

export default CoffeeBillboard;
