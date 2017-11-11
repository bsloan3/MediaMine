import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';


class HomepageContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=cuyKeH8rYOg'
        }
    }

    render () {
      return (
        <div>
      <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
      </video>
      <Navbar inverse collapseOnSelect className="navbar-fixed-top navBar">
        <Navbar.Header>
          <Navbar.Brand>
              MediaMine
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Link className="unlogged" activeClassName='active' to='/signup'>
              Sign Up
            </Link>

              <Link className="unlogged" activeClassName='active' to='/login'>
              Login
            </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>

        );
      }
    }

export default HomepageContainer;
