import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Scrollspy from 'react-scrollspy';
import {DropdownMenu} from 'react-bootstrap-dropdown-menu';
import UserFormContainer from './SignUpComponents/UserFormContainer';

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
        <Scrollspy items={ ['calendar-item', 'sports-item', 'news-item', 'podcasts-item-item'], ['youtube-item'] } currentClassName="is-current">
        <Navbar inverse collapseOnSelect fixedTop className="navBar">
          <Navbar.Header>
            <Navbar.Brand>
                MediaMine
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <a id="calendar-item" className="nav-item" href="#CalendarContainer">
            <div className="stuff">
              Calendar
            </div>
          </a>

          <a id="podcasts-item" className="nav-item" href="#PodcastsContainer">
            <div className="stuff">
              Podcasts
            </div>
          </a>
          <a id="sports-item" className="nav-item" href="#SportsContainer">
            <div className="stuff">
            Sports
          </div>
        </a>
        <a id="news-item" className="nav-item" href="#NewsContainer">
          <div className="stuff">
            News
          </div>
        </a>
        <a id="movies-item" className="nav-item" href="#MoviesContainer">
          <div className="stuff">
          Movies
        </div>
      </a>

      <a id="games-item" className="nav-item" href="#GamesContainer">
        <div className="stuff">
          Games
        </div>
      </a>

      <a id="music-item" className="nav-item" href="#MusicContainer">
        <div className="stuff">
          Music
        </div>
      </a>


        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Settings <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li>
            <Link activeClassName='active' to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link activeClassName='active' to="/news">News</Link>
          </li>
          <li>
            <Link activeClassName='active' to="/sports">Sports</Link>
          </li>
          <li>
          <a className="nav-item" onClick={this.logOut}>
            <Link activeClassName='active' to='/logout'>
            <div className="stuff">
              Log Out
            </div>
          </Link>
        </a>
      </li>
        </ul>



    </Navbar>
  </Scrollspy>

  </div>

    );
  }
}
