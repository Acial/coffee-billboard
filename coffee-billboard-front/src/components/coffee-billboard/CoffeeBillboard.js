import React from "react";
import CoffeeCard from "./CoffeeCard";
import "./CoffeeBillboard.scss";

const CoffeeBillboard = ({ coffees }) => {
  const content = (
    <div className="coffee-billboard">
      {coffees &&
        coffees.map((coffee, index) => {
          return (
            <CoffeeCard
              key={index}
              index={index}
              title={coffee.title}
              imageUrl={coffee.imageUrl}
              price={coffee.price}
            />
          );
        })}
    </div>
  );

  return content;
};

export default CoffeeBillboard;
