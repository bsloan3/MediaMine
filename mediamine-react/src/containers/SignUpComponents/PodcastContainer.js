import React, { Component } from 'react';
import $ from 'jquery';

export default class PodcastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value})
  }


  handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:5000/podcasts/')
     .then( response => response.json())
     .then( responseJson => {
      //  console.log(this.state.value)
       responseJson.map((podcast, i) => {
        if(podcast.podcast_name === this.state.value)
        // console.log(podcast.podcast)
        // console.log(this.state.value)
          this.state.result.push(podcast)
       }
     )
      console.log(this.state.result)
       return this.state.result
    })
       .catch(function(error){
         console.log('Fetch Error', error);
       });
    }

    render() {
      return(
        <div>
          <form id="search-form" onSubmit={this.handleSubmit.bind(this)}>
              <input onChange={this.handleChange} value={this.state.value} id="search" type="text" placeholder="Search Podcasts" name="value" />
          </form>
          <i className="fa fa-search"></i>
        </div>
      );
    }
}
