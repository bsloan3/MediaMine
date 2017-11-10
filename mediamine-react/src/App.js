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
import { BrowserRouter, Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavContainer/>
        <Route path='/login' component={LoginContainer} />
        <Route path='/calendar' component={CalendarContainer} />
        <Route path='/news' component={NewsContainer} />
        <Route path='/podcasts' component={PodcastsContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/sports' component={SportsContainer} />
        <Route path='/youtube' component={YoutubeContainer} />
      </div>
  </BrowserRouter>
    );
  }
}

export default App;
