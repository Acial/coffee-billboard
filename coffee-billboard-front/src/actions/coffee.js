import * as actionTypes from "../constants/actionTypes";
import axios from "axios";

export const loadCoffee = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOAD_COFFEES
    });

    axios.get("http://localhost:54155/api/coffee").then(
      response => {
        dispatch({
          type: actionTypes.LOAD_COFFEES_SUCCESS,
          payload: response.data
        });
      },
      () => {
        dispatch({
          type: actionTypes.LOAD_COFFEES_FAIL
        });
      }
    );
  };
};

export const addCoffee = coffee => {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_COFFEE
    });

    axios.post("http://localhost:54155/api/coffee", coffee).then(
      response => {
        dispatch({
          type: actionTypes.ADD_COFFEE_SUCCESS,
          payload: response.data
        });
      },
      () => {
        dispatch({
          type: actionTypes.ADD_COFFEE_FAIL
        });
      }
    );
  };
};

export const removeCoffee = id => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_COFFEE
    });

    axios.delete(`http://localhost:54155/api/coffee/${id}`).then(
      () => {
        dispatch({
          type: actionTypes.REMOVE_COFFEE_SUCCESS,
          payload: id
        });
      },
      () => {
        dispatch({
          type: actionTypes.REMOVE_COFFEE_FAIL
        });
      }
    );
  };
};
