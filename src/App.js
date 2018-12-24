import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CocktailsContainer from './containers/CocktailsContainer';
import './App.css';

class App extends Component {
  render() {
    console.log("In App")
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/cocktails" component={CocktailsContainer} />
      </div>
    );
  }
}

export default App;
