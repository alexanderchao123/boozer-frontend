import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cocktail extends Component {
  render () {
    return (
      <div>
        <Link to={`/cocktails/${this.props.cocktail.id}`} >{this.props.cocktail.name}</Link>
      </div>
    )
  }
}

export default Cocktail
