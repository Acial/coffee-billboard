import { combineReducers } from "redux";
import { coffeeReducer } from "./reducers/coffee";
import { loadingReducer } from "./reducers/loading";

export const rootReducer = combineReducers({
  coffees: coffeeReducer,
  loading: loadingReducer
});
