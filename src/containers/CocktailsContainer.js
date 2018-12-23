import React, { Component } from 'react'
import CocktailsList from '../components/CocktailsList'

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
    return (
      <div>CocktailsContainer</div>
    )
  }
}

export default CocktailsContainer
