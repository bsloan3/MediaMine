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
      }).catch((error) => {
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
      <div className="page_container podcasts-page-container">

        <h1 style={{paddingRight: '5%', paddingTop: '7%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> Podcasts </h1>
        <div style={{paddingTop: '15%', paddingBottom: '2%'}}>
          <Slider {...settings}>
            {this.state.embed_links.map(function (podcast) {
              return (
                <div><iframe width="98%" margin="2%" height="450" scrolling="no" frameBorder="no" src={podcast}></iframe></div>
                )
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
