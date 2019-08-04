import * as actionTypes from '../constants/actionTypes';

export const coffeeReducer = (state = [], {type, payload}) => {
    switch(type) {
        case actionTypes.LOAD_COFFEES_SUCCESS: 
            return payload
        case actionTypes.ADD_COFFEE_SUCCESS:
            return [...state, payload]
        case actionTypes.REMOVE_COFFEE_SUCCESS:
            return state.filter((item) => item.id !== payload)
        default:
            return state;
    }
}