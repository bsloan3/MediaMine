import React, { Component } from 'react';
import $ from 'jquery';
import PodcastDisplay from './SignUpForms/PodcastDisplay'
import {Button} from 'react-bootstrap'

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
          // console.log(podcast)
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
        <div className="modal fade bs-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-body">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input onChange={this.handleChange} value={this.state.value} type="search" placeholder="Search Podcasts" name="value" />
                  <button type="submit" class="btn btn-primary">Search</button>
                </form>
                <i className="fa fa-search"></i>
                {this.state.result.map( (p,i) => <PodcastDisplay key={i} podcast={p} />)}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

              </div>
      </div>
    </div>

    );
  }
}
