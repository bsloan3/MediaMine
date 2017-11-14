import React, { Component } from 'react';

export default class MusicContainer extends Component {
  render() {
    return (
      <div className="page_container">

        <h1 style={{paddingRight: '5%', paddingTop: '4%', color: 'white', textAlign: 'right'}}> Music </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLeqkFcL9xTiDnqU0aE10_qddAG9aSPtKJ" frameborder="0" gesture="media" allowfullscreen></iframe>
      </div>
    );
  }
}
