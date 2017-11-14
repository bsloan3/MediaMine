// import React, { Component } from 'react';
// import axios from 'axios';
// import {Button} from 'react-bootstrap';
//
// export default class PodcastDisplay extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       podcast_name: '',
//       podcast_embed: ''
//     }
//     this.addPodcast = this.addPodcast.bind(this)
//   }
//
//   addPodcast(podcast){
//     let my_url = 'http://localhost:5000/users/'+sessionStorage.user_id+'/podcasts';
//     let data ={
//       user_id: sessionStorage.user_id,
//       podcast: {
//         podcast_name: podcast.podcast_name,
//         podcast_embed: podcast.podcast_embed
//       }
//     }
//
//     axios.post(my_url, data).then(res => {
//       window.location.reload()
//     })
//     let {podcast, addPodcast} = this.props
//   }
//   render () {
//     return(
//
//   //     <div>
//   //     {this.props.myPodcast.map((podcast, i) => {
//   //     <center>
//   //     <h2>{podcast.podcast_name}</h2>
//   //     <p>{podcast.podcast_embed}</p>
//   //     <Button onClick={addPodcast.bind(null, podcast)}>
//   //       Add
//   //     </Button>
//   //   </center>
//   // })}
//   // </div>
//     );
//   }
// }
