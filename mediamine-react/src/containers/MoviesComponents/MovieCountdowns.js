import React, { Component } from 'react';
import Img from 'react-image'
import CountDown from './CountDown'
import $ from 'jquery';
import moment from 'moment';
import Slider from 'react-slick';

function SampleNextArrow(props) {
const {className, style, onClick} = props
return (
  <div
    className={className}
    style={{...style, display: 'block'}}
    onClick={onClick}
  ></div>
);
}

function SamplePrevArrow(props) {
const {className, style, onClick} = props
return (
  <div
    className={className}
    style={{...style, display: 'block'}}
    onClick={onClick}
  ></div>
);
}

export default class MovieCountdowns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[]
    };
  }
  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/movies/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({movies: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {
    var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          style: {

          }
        };
    return(
        <Slider {...settings}>
          {this.state.movies.map(function (movie, i) {
            if(moment().isSameOrBefore(movie.movie_date)) {
            return (
              <div key={i} className="movie">
                <CountDown movie_date={movie.movie_date}/>
                <img className="photoimg" src= {'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + (movie.movie_image)} />
                <h2>{movie.movie_name}</h2>
                <h4>{(new Date(movie.movie_date)).toString()}</h4>
              </div>
            )}
          })}
        </Slider>
    );
  }
}
