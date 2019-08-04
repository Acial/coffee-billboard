import React from 'react';
import CoffeeBillboard from './CoffeeBillboard';
import AddCoffee from '../add-coffee/AddCoffee';
import { useDispatch, useSelector } from 'react-redux';
import { loadCoffee } from '../../actions/coffee';
import { useEffect } from 'react';

const CoffeeBillboardContainer = () => {
  const coffees = useSelector(state => state.coffees);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoffee());
  }, [dispatch]);

  const content = loading ? (
    <h1>Loading...</h1>
  ) : (
      <React.Fragment>
        <AddCoffee />
        <CoffeeBillboard coffees={coffees} />
      </React.Fragment>
  );

  return content;
};

export default CoffeeBillboardContainer;
