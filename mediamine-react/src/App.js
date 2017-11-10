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
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/logout' component={NavContainer} />
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
    </div>
  </BrowserRouter>

    );
  }
}

export default App;
