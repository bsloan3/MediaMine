import React, { Component } from 'react';
import Img from 'react-image';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import MovieInformation from './MovieInformation'
import moment from 'moment';
export default class MovieResult extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie_name: '',
      movie_date: '',
      movie_image: ''
    }
    this.addMovie = this.addMovie.bind(this)
  }

  addMovie(movie){
    let my_url = 'http://localhost:5000/users/'+sessionStorage.user_id+'/movies';
    let data = {
      user_id: sessionStorage.user_id,
      movie: {
        movie_name: movie.title,
        movie_date: movie.release_date,
        movie_image: movie.poster_path
      }
    }

    axios.post(my_url, data).then(res => {

    })
  }
  render() {
    return(

      <div className="horizontal-scroll-wrapper">
        {this.props.newMovie.map((movie, i) => {
          // console.log(movie)
          if(moment().isSameOrBefore(movie.release_date || movie.first_air_date)) {
          return(
           <MovieInformation key={i} addMovie={this.addMovie} movie={movie}/>
         )}
        })}

      </div>
    );
  }
}
