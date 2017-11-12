import React, { Component } from 'react';
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

export default class PodcastContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/podcasts/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({embed_links: responseJson});
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
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          style: {
            width: "90%"
          }
        };
    return (
      <div className="page_container">

        <h1 style={{marginTop: '5%'}}> Podcasts </h1>

        <Slider {...settings}>
          {this.state.embed_links.map(function (podcast) {
            return (
              <div><iframe width="98%" margin="2%" height="450" scrolling="no" frameBorder="no" src={podcast}></iframe></div>
              )
          })}
        </Slider>
      </div>
    );
  }
}
