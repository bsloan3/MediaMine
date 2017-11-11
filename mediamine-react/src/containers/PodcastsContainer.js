import React, { Component } from 'react';

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
    return (
      <div className="page_container">

        <h1 style={{marginTop: '5%'}}> Podcasts </h1>

        {this.state.embed_links.map(function (podcast) {
          return (
            <iframe width="30%" height="450" scrolling="no" frameborder="no" src={podcast}></iframe>
            )
        })}

      </div>
    );
  }
}
