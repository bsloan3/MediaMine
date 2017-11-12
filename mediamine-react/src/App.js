import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavContainer from './containers/NavContainer';
import CalendarContainer from './containers/CalendarContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import SportsContainer from './containers/SportsContainer';
import MoviesContainer from './containers/MoviesContainer';
import NewsContainer from './containers/NewsContainer';
import YoutubeContainer from './containers/YoutubeContainer';
import PodcastsContainer from './containers/PodcastsContainer';
import HomepageContainer from './containers/HomepageContainer';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
  if(sessionStorage.length === 0){
    return (
      <BrowserRouter>
        <div>
        <HomepageContainer />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/login' component={LoginContainer} />
      </div>
    </BrowserRouter>
      );
    }

    else {
      return(
        <BrowserRouter>
        <div className="App">
          <div className="Nav">
            <Route path='/logout' component={NavContainer} />
            <NavContainer/>
          </div>

          <div className="appbody">
            <div id="PodcastsContainer">
              <PodcastsContainer/>
            </div>

            <div id="SportsContainer" className="page">
              <SportsContainer/>
            </div>

            <div id="NewsContainer" className="page">
              <NewsContainer/>
            </div>

            <div id="MoviesContainer" className="page">
              <MoviesContainer/>
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
}
