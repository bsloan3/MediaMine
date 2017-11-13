import React, { Component } from 'react';
import $ from 'jquery';
import {Button} from 'react-bootstrap';
import Img from 'react-image';

export default class MovieInformation extends Component {
  render() {
    let {movie, addMovie} = this.props
    return(
      <div>
      <center><h2>{movie.title}</h2>
      <img className="img" src= {'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path} />
      <p>{movie.release_date}</p>
      <p> {movie.overview} </p>
      <Button onClick={addMovie.bind(null, movie)}>
        Add to schedule
      </Button>
    </center>
    </div>

    );
  }
}
