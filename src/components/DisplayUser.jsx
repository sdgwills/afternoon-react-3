import React, { Component } from 'react'

export default class DisplayUser extends Component {
  
  
  render() {
    console.log(this.props.data)
    return(
      <div>
        <h2> { this.props.data.id + '/' + this.props.dataArr.length } </h2>
        <h1> { `${this.props.data.name.first} ${this.props.data.name.last}` } </h1>
        <h3> { `From: ${this.props.data.city}, ${this.props.data.country}` } </h3>
        <h3> { 'Job Title: ' + this.props.data.title } </h3>
        <h3> { 'Employer: ' + this.props.data.employer } </h3>
        <h3> Favorite Movies: </h3>
        <ol>
          <li> { this.props.data.favoriteMovies[0] } </li>
          <li> { this.props.data.favoriteMovies[1] } </li>
          <li> { this.props.data.favoriteMovies[2] } </li>
        </ol>
      </div>
    )
  }
}