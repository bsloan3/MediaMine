import React, { Component } from 'react';

export default class MusicContainer extends Component {
  constructor(){
    super();
    this.state = {
      display_class: 'hide'
    }
  }

  hide(){
    let display_class;
    this.state.display_class === 'player' ? display_class = 'hide' : display_class = 'player';
    console.log(display_class)
    this.setState({display_class})
  }
  render() {
    return (
      <div className="page_container">
        <div id="player" style={{marginBottom: '1%', marginLeft: '1%'}} className={this.state.display_class}>
          <iframe src="https://www.youtube.com/embed/videoseries?list=PLeqkFcL9xTiDnqU0aE10_qddAG9aSPtKJ" frameborder="0" gesture="media" allowfullscreen></iframe>
        </div>
        <input onClick={this.hide.bind(this)} style={{position: 'fixed', bottom: '0', marginBottom: '1%', marginLeft: '1%'}} type="submit" value="MUSIC"/>
      </div>
    );
  }
}
