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
      <div class="video-background">
        <div class="video-foreground">
          <iframe src=""
          frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
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
