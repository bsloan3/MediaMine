import React, { Component } from 'react';
import Img from 'react-image'

export default class MovieResult extends Component {


  render() {
    return(

      <div className="horizontal-scroll-wrapper">
        {this.props.newMovie.map((movie, i) => {
          return(
            <div>
            <p>{movie.title}</p>
            <img className="photoimg" src= {'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path} />
            <p>{movie.release_date}</p>
            <p> {movie.overview} </p>
          </div>
          )
        })}

      </div>
    );
  }
}
