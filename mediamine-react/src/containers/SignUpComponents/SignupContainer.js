import React, { Component } from 'react';
import {FormControl, Col, ControlLabel, FormGroup, Button} from 'react-bootstrap';
import axios from 'axios';
import PodcastSearch from './PodcastSearch';
import $ from 'jquery';
import Register from './Register';
import NewsInfo from './NewsInfo';
import Scrollspy from 'react-scrollspy';

export default class SignupContainer extends Component {
  constructor(props){
    super(props);
  }

  refresh(){
    window.location.assign('/#Calendar');
  }

  render() {

    return (
      <div class="sign-up-page">
        <Scrollspy items={ ['register-signup', 'podcast', 'news'] }
          currentClassName="is-current">

        <div id="register-signup" className="register" href="#Register">
          <h1> Register </h1>
            <Register/>
        </div>

        <div id="PodcastSearch" className="podcast-signup">
          <h1>Add Your Favorite Podcasts</h1>
          <PodcastSearch />
        </div>


        <div id="news" className="news-signup" href="#NewsInfo">
          <NewsInfo />
        </div>

        <Button className="submitnewuser" type="button" onClick={this.refresh}> All Done!</Button>
      </Scrollspy>
      </div>

    );
  }
}
