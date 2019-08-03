import React from 'react';
import CoffeeBillboard from './CoffeeBillboard';
import { useDispatch, useSelector } from 'react-redux';
import { loadCoffee } from '../../actions/coffee';
import { useState, useEffect } from 'react';

const CoffeeBillboardContainer = (props) => {
    const coffees = useSelector(state => state.coffees);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCoffee())
    }, [])
    
    const content = <div>
        { loading ? <h1>SPINNER</h1> : <CoffeeBillboard coffees={coffees}/>}
    </div>

    return content;
}

export default CoffeeBillboardContainer;