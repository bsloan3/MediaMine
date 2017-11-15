import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

function SampleNextArrow(props) {
const {className, style, handleSubmit} = props
return (
  <div
    className={className}
    style={{...style, display: 'block'}}
    onClick={handleSubmit()}
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
      embed_links:[],
      podcast_call_index: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/' + sessionStorage.user_id + '/podcasts/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({podcast_call_index: responseJson.call_index, embed_links: responseJson.data});
      }).catch((error) => {
        console.error(error);
      });
  }
  handleSubmit() {
    let {embed_links, podcast_call_index} = this.state;
    axios.get('http://localhost:5000/users/' + sessionStorage.user_id + '/podcasts/' + podcast_call_index)
      .then( update_podcasts => {
        this.setState({
          embed_links: update_podcasts.data.data,
          podcast_call_index: update_podcasts.data.call_index
        })
      })
  }
  render() {
    var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow handleSubmit={this.handleSubmit}/>,
          prevArrow: <SamplePrevArrow />,
          style: {
            width: "90%"
          }
        };
    return (
      <div className="page_container podcasts-page-container">

        <h1 style={{paddingRight: '5%', paddingTop: '7%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> Podcasts </h1>
        <div style={{paddingBottom: '2%'}}>
          <Slider {...settings}>
            {this.state.embed_links.map(function (podcast, i) {
              return (
                <div key={i}><iframe width="98%" margin="2%" height="450" scrolling="no" frameBorder="no" src={podcast}></iframe></div>
                )
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
