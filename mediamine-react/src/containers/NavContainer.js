import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Scrollspy from 'react-scrollspy';
import {DropdownMenu} from 'react-bootstrap-dropdown-menu';
import UserFormContainer from './SignUpComponents/UserFormContainer';
import PodcastContainer from './SignUpComponents/PodcastContainer';
import NewsDisplay from './SignUpComponents/NewsDisplay'


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
        <Scrollspy items={ ['calendar-item', 'sports-item', 'news-item', 'podcasts-item', 'movies-item'] } currentClassName="is-current">
        <Navbar inverse collapseOnSelect fixedTop className="navBar">
          <Navbar.Header>
            <Navbar.Brand>
                MediaMine
            </Navbar.Brand>
          </Navbar.Header>
          <a id="calendar-item" className="nav-item" href="#Calendar">
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

        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Settings <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li>
            <a className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg1">Podcasts</a>
          </li>
          <li>
            <a className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg2">News</a>
          </li>
          <li>
            <a activeClassName='active' to="/sports">Sports</a>
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
  <PodcastContainer/>
  <NewsDisplay/>
  </Scrollspy>

  </div>

    );
  }
}
