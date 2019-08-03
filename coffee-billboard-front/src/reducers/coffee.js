import * as actionTypes from '../constants/actionTypes';

export const coffeeReducer = (state = [], {type, data}) => {
    switch(type) {
        case actionTypes.LOAD_COFFEES_SUCCESS: 
            return data
        case actionTypes.ADD_COFFEE:
            return {
                ...state,
                coffees: [...state.coffees, data]
            };
        default:
            return state;
    }
}