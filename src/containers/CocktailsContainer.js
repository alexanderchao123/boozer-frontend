import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CocktailsList from '../components/CocktailsList'
import CocktailShow from '../components/CocktailShow'

class CocktailsContainer extends Component {
  constructor () {
    super ()
    this.state = {
      cocktails: []
    }
  }

  fetchCocktails = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
    .then(res => res.json())
    .then(cocktails => this.setState({cocktails: cocktails}))
  }

  componentDidMount () {
    this.fetchCocktails()
  }

  render () {
    console.log("In Cocktail Container")
    return (
      <div>
        <Route exact path="/cocktails" render={() => (
          <div>
            <h1>CocktailsContainer</h1>
            <h3>Please select a cocktail from the list.</h3>
            <CocktailsList cocktails={this.state.cocktails} />
          </div>
        )}/>

        <Route path="/cocktails/:id" render={(routerProps) => (
          <CocktailShow {...routerProps} />
        )} />
      </div>
    )
  }
}

export default CocktailsContainer
