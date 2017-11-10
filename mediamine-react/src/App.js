import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavContainer from './containers/NavContainer';
import CalendarContainer from './containers/CalendarContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import SportsContainer from './containers/SportsContainer';
import NewsContainer from './containers/NewsContainer';
import YoutubeContainer from './containers/YoutubeContainer';
import PodcastsContainer from './containers/PodcastsContainer';


class App extends Component {
  render() {
    return (
      <div>
        <div>
        {/* <NavContainer /> */}
        <div id="NewsContainer">
          <a href='#NewsContainer'>Youtube</a>
        </div>
        <div id="SportsContainer" className="page">
          <SportsContainer />
        </div>
        {/* <div id="NewsContainer" className="page">
          <NewsContainer />
        </div> */}
        <div id="sports" className="page">
        </div>
      </div>
      </div>
    );
  }
}

export default App;
