import React, { Component } from 'react';
import $ from 'jquery';
import PodcastDisplay from './SignUpForms/PodcastDisplay'
import {Button} from 'react-bootstrap'

export default class PodcastSearch extends Component {
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
       responseJson.map((podcast, i) => {
        if(podcast.podcast_name.toLowerCase().match(this.state.value)) {
          this.setState({result: [podcast]})
          // console.log(podcast)
        }
       }
     )
    })
       .catch(function(error){
         console.log('Fetch Error', error);
       });

    }
    render() {
      return(
            <div className="modal-body">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input onChange={this.handleChange} value={this.state.value} type="text" placeholder="Search Podcasts" name="value" />
                  <button type="submit" class="btn btn-primary">Search</button>
                </form>
                <i className="fa fa-search"></i>
                {this.state.result.map( (p,i) => <PodcastDisplay key={i} podcast={p} />)}
          </div>


    );
  }
}
