import React from 'react';
import CoffeeBillboard from './CoffeeBillboard';

const CoffeeBillboardContainer = (props) => {
    const coffees = [
        {
            title: 'coffee 1',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG',
            price: 30
        },
        {
            title: 'coffee 1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG',
            price: 30
        },
        {
            title: 'coffee 1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG',
            price: 30
        },
        {
            title: 'coffee 1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG',
            price: 30
        },
        {
            title: 'coffee 1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG',
            price: 30
        }
    ]

    const content = <div>
        <CoffeeBillboard coffees={coffees}/>
    </div>

    return content;
}

export default CoffeeBillboardContainer;