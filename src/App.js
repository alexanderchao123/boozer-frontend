import React, { Component } from 'react';
import CocktailsContainer from './containers/CocktailsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
