import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavContainer from './containers/NavContainer';
import CalendarContainer from './containers/CalendarContainer';
import SignupContainer from './containers/SignUpComponents/SignupContainer';
import UserFormContainer from './containers/SignUpComponents/UserFormContainer';
import LoginContainer from './containers/LoginContainer';
import SportsContainer from './containers/SportsContainer';
import MoviesContainer from './containers/MoviesContainer';
import NewsContainer from './containers/NewsContainer';
import GamesContainer from './containers/GamesContainer';
import PodcastsContainer from './containers/PodcastsContainer';
import HomepageContainer from './containers/HomepageContainer';
import MusicContainer from './containers/MusicContainer';
import {BrowserRouter, Route, Router} from 'react-router-dom';

export default class App extends Component {
  render() {
  if(sessionStorage.length === 0){
    return (
      <BrowserRouter>
        <div>
        <Route path='/user-form' component={UserFormContainer} />
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
          <UserFormContainer />
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

            <div id="MusicContainer" className="page">
              <MusicContainer/>
            </div>

            <div id="GamesContainer" className="page">
              <GamesContainer/>
            </div>
          </div>
        </div>
      </BrowserRouter>
      );
    }
  }
}
