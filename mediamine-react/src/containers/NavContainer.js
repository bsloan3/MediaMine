import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Scrollspy from 'react-scrollspy'

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(){
    sessionStorage.clear()
    axios.post('http://localhost:5000/logout')
    .then((res) =>{
      console.log(this)
      sessionStorage.clear()
      window.location.reload()
    }).catch((res) => {
      sessionStorage.clear()
    })
  }

  render() {
      return(
          <div>
        <Scrollspy items={ ['sports-item', 'news-item', 'podcasts-item-item'], ['youtube-item'] } currentClassName="is-current">
        <Navbar inverse collapseOnSelect fixedTop className="navBar">
          <Navbar.Header>
            <Navbar.Brand>
                MediaMine
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <a id="sports-item" className="nav-item" href="#SportsContainer">
            <div className="stuff">
            Sports
          </div>
        </a>
        <a id="movies-item" className="nav-item" href="#MoviesContainer">
          <div className="stuff">
          Movies
        </div>
      </a>
          <a id="news-item" className="nav-item" href="#NewsContainer">
            <div className="stuff">
              News
            </div>
          </a>
          <a id="podcasts-item" className="nav-item" href="#PodcastsContainer">
            <div className="stuff">
              Podcasts
            </div>
          </a>
          <a id="games-item" className="nav-item" href="#GamesContainer">
            <div className="stuff">
              Games
            </div>
          </a>
          <a className="nav-item" onClick="/user-form">
            <Link activeClassName='active' to='/user-form'>
              Edit Preferences
            </Link>
          </a>
          <a className="nav-item" onClick={this.logOut}>
            <Link activeClassName='active' to='/logout'>
            <div className="stuff">
            Log Out
          </div>
            </Link>
          </a>
    </Navbar>
  </Scrollspy>

  </div>

    );
  }
}
