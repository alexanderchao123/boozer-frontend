import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render () {
    console.log("In Cocktail List")
    let cocktails = this.props.cocktails.map((cocktail) => (
      <Cocktail key={cocktail.id} cocktail={cocktail} />
    ))

    return (<div>{cocktails}</div>)
  }
}

export default CocktailsList
