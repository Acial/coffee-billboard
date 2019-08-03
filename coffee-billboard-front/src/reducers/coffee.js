import * as actionTypes from '../constants/actionTypes';

export const coffeeReducer = (state, {type, data}) => {
    console.log(state);
    switch(type) {
        case actionTypes.LOAD_COFFEES: 
            return {
                ...state,
                coffees: data
            };
        case actionTypes.ADD_COFFEE:
            return {
                ...state,
                coffees: [...state.coffees, data]
            };
        default:
            return state;
    }
}