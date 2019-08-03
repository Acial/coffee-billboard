import * as actionTypes from '../constants/actionTypes';

export const coffeeReducer = (state = [], {type, data}) => {
    switch(type) {
        case actionTypes.LOAD_COFFEES_SUCCESS: 
            return data
        case actionTypes.ADD_COFFEE_SUCCESS:
            return [...state, data]
        default:
            return state;
    }
}