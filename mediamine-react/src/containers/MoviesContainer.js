import React, { Component } from 'react';

export default class MoviesContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/movies/')
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

        <h1 style={{marginTop: '5%'}}> Movies </h1>
         {this.state.embed_links.map(function (movie) {
          return (
            <div><p>movie</p></div>
            )
        })}

      </div>
    );
  }
}
