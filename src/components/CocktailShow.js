import React, { Component } from 'react'

class CocktailShow extends Component {
  constructor () {
    super ()
    this.state = {
      cocktail: {}
    }
  }

  fetchCocktail = () => {
    let id = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/cocktails/${id}`)
    .then(res => res.json())
    .then(cocktail => this.setState({cocktail: cocktail}))
  }

  componentDidMount () {
    this.fetchCocktail()
  }

  render () {
    return (
      <h1>Cocktail Show: {this.state.cocktail.name}</h1>
    )
  }
}

export default CocktailShow
