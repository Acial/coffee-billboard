import React from "react";
import CoffeeBillboardContainer from "./components/coffee-billboard/CoffeeBillboardContainer";
import { Provider } from "react-redux";
import { store } from './store';
import "./App.scss";
  
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
