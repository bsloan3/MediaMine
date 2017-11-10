import React, { Component } from 'react';

export default class PodcastContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/podcasts')
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
      <div>

        <h1 style={{marginTop: '5%'}}> Podcasts </h1>

        {this.state.embed_links.map(function (podcast) {
          return (
            <iframe width="30%" height="450" scrolling="no" frameborder="no" src={podcast.podcast_embed}></iframe>
            )
        })}

      </div>
    );
  }
}