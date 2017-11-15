import React, { Component } from 'react';
import $ from 'jquery';
import PodcastDisplay from './SignUpForms/PodcastDisplay'
import {Button, Modal} from 'react-bootstrap'
export default class PodcastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      value: '',
      isOpen: false
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
        if(podcast.podcast_name === this.state.value) {
          this.setState({result: [podcast]})
        }
       }
     )
    })
       .catch(function(error){
         console.log('Fetch Error', error);
       });
       let {podcast} = this.props
    }
    render() {
      return(

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div id="search">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input onChange={this.handleChange} value={this.state.value} type="search" placeholder="Search Podcasts" name="value" />
                  <button type="submit" class="btn btn-primary">Search</button>
                </form>
                <i className="fa fa-search"></i>
                {this.state.result.map( (p,i) => <PodcastDisplay key={i} podcast={p} />)}
              </div>
            </div>
          </div>
        </div>

    );
  }
}
