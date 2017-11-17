import React, { Component } from 'react';
import SearchBar from './MoviesComponents/SearchBar'
import MovieResult from './MoviesComponents/MovieResult'
import MovieCountdowns from './MoviesComponents/MovieCountdowns'

export default class MoviesContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
        movie: 1
      }
      this.updateResult = this.updateResult.bind(this);
      this.updateMovies = this.updateMovies.bind(this);
    }

  updateMovies(){
    this.setState({movie: this.state.movie + 1}, function () {
    console.log(this.state.movie);
    });
  }

  updateResult(newResult) {
    this.setState({results: newResult})
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

        <h1 style={{paddingRight: '5%', paddingTop: '7%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> Movies </h1>
        <SearchBar onUpdate={this.updateResult} />
        <div style={{width: '40%', height: '70VH', float:'right', paddingRight:'3%', overflowY: 'scroll'}}>
          <div className="movie-result">
            <MovieResult newMovie={this.state.results} update={this.updateMovies}/>
          </div>
        </div>
        <MovieCountdowns movie={this.state.movie} />
      </div>
    );
  }
}
