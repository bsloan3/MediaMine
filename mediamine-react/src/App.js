import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavContainer from './containers/NavContainer';
import Calendar from './containers/Calendar';
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
import PodcastContainer from './containers/SignUpComponents/PodcastContainer'
import NewsDisplay from './containers/SignUpComponents/NewsDisplay'
import {BrowserRouter, Route, Router} from 'react-router-dom';
// import UpcomingMovies from './containers/SignUpComponents/UpcomingMovies'
import axios from 'axios';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
      podcastData : {},
    }
  }

  componentDidMount() {

  var user_id = sessionStorage.user_id;
  axios.get('http://localhost:5000/users/' + user_id + '/movies/')
  .then( cal => {
    let events = cal.data.map(e => {
      return {title: e.movie_name, start: new Date(e.movie_date), end: new Date(e.movie_date)}
    });
    this.setState({events})
  })
  .catch(err => {
  });
}
  // componentDidMount() {
  //   let calendarevents = [];
  //   let cal_2_evenets = [];
  //   var user_id = sessionStorage.user_id;
  //   axios.get('http://localhost:5000/users/' + user_id + '/calendarevents/')
  //   .then( cal => {
  //     let calendarevents = cal.data.map(e => {
  //       return {title: e.title, start: new Date(e.start), end: new Date(e.end)}
  //     });
  //   this.setState({events: calendarevents}
  //   })

// axios.get('http://localhost:5000/users/'+user_id+'/movies/')
//   .then((responseJson) => {
//     let cal_2_evenets = responseJson.map(e => {
//       return {title: e.title, start: new Date(e.start), end: new Date(e.end)};
//     })
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// debugger
// this.setState({events: calendarevents});
// }

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
            {/* <Route path='/settings' component={UserFormContainer} /> */}
            <Route path='/podcasts' component={PodcastContainer} />
            <Route path='/news' component={NewsDisplay} />
            <Route path='/logout' component={NavContainer} />
            <NavContainer/>
          </div>
          <div className="appbody">

          <div id="Calendar" className="page">
            <Calendar events={this.state.events}/>
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

            <div id="MoviesContainer" className="page">
              <MoviesContainer/>
            </div>

            <div style={{position: 'fixed', bottom: '0', width: '25%', height: '25%'}}>
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
