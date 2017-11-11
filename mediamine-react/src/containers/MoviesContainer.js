import React, { Component } from 'react';
import SearchBar from './SearchBar'
import MovieResult from './MovieResult'
import MovieCountdowns from './MovieCountdowns'

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
      <div className="page_container">

        <h1>Movies</h1>
        <MovieCountdowns />
        <SearchBar onUpdate={this.updateResult} />
        <div className="movie-result"> <MovieResult newMovie={this.state.result}/></div>

      </div>
    );
  }
}
