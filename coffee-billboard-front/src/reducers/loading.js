import * as actionTypes from '../constants/actionTypes';

export const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.LOAD_COFFEES:
      return true;
    case actionTypes.LOAD_COFFEES_FAIL:
      return false;
    case actionTypes.LOAD_COFFEES_SUCCESS:
      return false;
    case actionTypes.ADD_COFFEE:
      return true;
    case actionTypes.ADD_COFFEE_FAIL:
      return false;
    case actionTypes.ADD_COFFEE_SUCCESS:
      return false;
    case actionTypes.REMOVE_COFFEE:
      return true;
    case actionTypes.REMOVE_COFFEE_FAIL:
      return false;
    case actionTypes.REMOVE_COFFEE_SUCCESS:
      return false;
    default:
      return state;
  }
};
