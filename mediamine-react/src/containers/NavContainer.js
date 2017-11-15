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


      <a className="nav-item" onClick={this.logOut}>
        <Link activeClassName='active' to='/logout'>
          <div className="stuff">
            Log Out
          </div>
        </Link>
      </a>

      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Settings <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
              Launch demo modal
            </button>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                  </div>
                  <div class="modal-body">
                    hellohellohellohellohellohellohellohello
                  </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </li>
          <li>
            <Link onClick={this.toggleModal} activeClassName='active' to="/news">News</Link>
          </li>
          <li>
            <Link onClick={this.toggleModal} activeClassName='active' to="/sports">Sports</Link>
          </li>
        </ul>
      </li>
    </Navbar>
  </Scrollspy>

  </div>

    );
  }
}
