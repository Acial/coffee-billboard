import React from 'react';
import CoffeeBillboardContainer from './components/coffee-billboard/CoffeeBillboardContainer';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

const FakeRoute = () => <h1>Fake route</h1>  

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Route path='/' exact component={CoffeeBillboardContainer} />
          <Route path='/fake' exact component={FakeRoute} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
