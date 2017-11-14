import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

export default class PodcastDisplay extends Component {
  constructor(props){
    super(props)
    this.state = {
      podcast_name: '',
      podcast_embed: ''
    }
    this.addPodcast = this.addPodcast.bind(this)
  }

  addPodcast(podcast){
    let my_url = 'http://localhost:5000/users/'+sessionStorage.user_id+'/podcasts';
    let data ={
      user_id: sessionStorage.user_id,
      podcast: {
        podcast_name: podcast.podcast_name,
        podcast_embed: podcast.podcast_embed
      }
    }

    axios.post(my_url, data).then(res => {
      window.location.reload()
      debugger
    })
  }
  render () {
    return(
          <div>
          <center>
          <h2>{this.props.podcast.podcast_name}</h2>
          <p>{this.props.podcast.podcast_embed}</p>
          <Button onClick={this.addPodcast.bind(null, this.props.podcast)}>
           Add
         </Button>
       </center>
     })}
      </div>

    );
  }
}
