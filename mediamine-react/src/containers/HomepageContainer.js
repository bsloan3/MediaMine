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
          <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
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
            <div className="homepage-nav-buttons">
            <Link activeClassName='active' to='/signup'>
            <div className="homepage-nav">
              Sign Up
            </div>
          </Link>
              <Link activeClassName='active' to='/login'>
              <div className="homepage-nav">
                Login
              </div>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </div>
        );
      }
    }

export default HomepageContainer;
