import React from "react";
import "./App.scss";
import CoffeeBillboardContainer from "./components/coffee-billboard/CoffeeBillboardContainer";
import { createStore } from "redux";
import { coffeeReducer } from "./reducers/coffee";
import { Provider } from "react-redux";

const store = createStore(
  coffeeReducer,
  {},
  window.devToolsExtension && window.devToolsExtension()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Coffee billboard</h1>
        <CoffeeBillboardContainer />
      </div>
    </Provider>
  );
}

export default App;
