import * as actionTypes from "../constants/actionTypes";

export const loadCoffee = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOAD_COFFEES
    });

    setTimeout(() => {
      dispatch({
        type: actionTypes.LOAD_COFFEES_SUCCESS,
        data: [
          {
            title: "coffee 1",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
            price: 30
          },
          {
            title: "coffee 1",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
            price: 30
          },
          {
            title: "coffee 1",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
            price: 30
          },
          {
            title: "coffee 1",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
            price: 30
          },
          {
            title: "coffee 1",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG",
            price: 30
          }
        ]
      });
    }, 1000);
  };
};

export const addCoffee = coffee => {
  return dispatch =>
    dispatch({
      type: actionTypes.ADD_COFFEE,
      data: coffee
    });
};
