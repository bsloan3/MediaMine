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
      <div className="App">

        <div className="Nav">
          <NavContainer/>
        </div>

        <div id="PodcastsContainer">
          <PodcastsContainer/>
        </div>

        <div id="SportsContainer" className="page">
          <SportsContainer/>
        </div>

        <div id="NewsContainer" className="page">
          <NewsContainer/>
        </div>

        <div id="YoutubeContainer" className="page">
          <YoutubeContainer/>
        </div>

      </div>

    );
  }
}

export default App;
