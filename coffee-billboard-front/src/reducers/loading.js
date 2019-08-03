import * as actionTypes from '../constants/actionTypes'

export const loadingReducer = (state = false, {type}) => {
    switch(type){
        case actionTypes.LOAD_COFFEES:
            return true;
        case actionTypes.LOAD_COFFEES_FAIL:
            return false;
        case actionTypes.LOAD_COFFEES_SUCCESS:
            return false;
        default:
            return state;
    }
}