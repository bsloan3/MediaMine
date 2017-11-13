import React, { Component } from 'react';
import $ from 'jquery';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {value: ''};
   this.handleChange = this.handleChange.bind(this);
 }
   handleChange(e){
     this.setState({value: e.target.value})
   }

   handleSubmit(e){
     e.preventDefault();
     let url = `https://api.themoviedb.org/3/search/multi?api_key=9b953bb0dd7d798ddff785c4fd65c7cb&language=en-US&query=${this.state.value}&page=1&include_adult=false`

     fetch(url)
     .then( response => response.json())
     .then( responseJson => {
        this.props.onUpdate(responseJson.results);
        // console.log(this.props.onUpdate(responseJson.results))
      })
     .catch(function(error){
       console.log('Fetch Error', error);
     });
  }

  render() {
    return(
      <div>
        <form id="search-form" onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange} value={this.state.value} id="search" type="text" placeholder="Search Movies" name="value" />
        </form>
        <i className="fa fa-search"></i>
      </div>
    );
  }
}
