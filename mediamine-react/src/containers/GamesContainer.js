import React, { Component } from 'react';

export default class GamesContainer extends Component {
  render() {
    return (
      <div className="page_container">

        <h1 style={{paddingRight: '5%', paddingTop: '4%', color: 'white', textAlign: 'right'}}> Games </h1>
        <iframe width="100%" margin="2%" height="450" scrolling="no" frameBorder="no" src='https://levytsroman.github.io/shootThingsGame/'></iframe>
      </div>
    );
  }
}
