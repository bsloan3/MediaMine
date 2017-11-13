import React, { Component } from 'react';
import SearchBar from './MoviesComponents/SearchBar'
import MovieResult from './MoviesComponents/MovieResult'
import MovieCountdowns from './MoviesComponents/MovieCountdowns'

export default class MoviesContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {result: []}
      this.updateResult = this.updateResult.bind(this);
    }

  updateResult(newResult) {
    this.setState({result: newResult})
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/movies/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({embed_links: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="page_container movies-page-container">

        <h1 style={{paddingRight: '5%', paddingTop: '4%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> Movies </h1>
        <SearchBar onUpdate={this.updateResult} />
        <div className="movie-result"> <MovieResult newMovie={this.state.result}/></div>
        <MovieCountdowns />
      </div>
    );
  }
}
