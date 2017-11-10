import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

export default class NavContainer extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
    <Navbar inverse collapseOnSelect fixedTop className="navBar">
      <Navbar.Header>
        <Navbar.Brand>
            MediaMine
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className="nav-item" eventKey={5}>
            <NavLink activeClassName='active' to='/signup'>
            Sign Up
          </NavLink>
        </NavItem>
          <NavItem className="nav-item" eventKey={1} href="#SportsContainer">
            Sports
        </NavItem>
          <NavItem className="nav-item" eventKey={2}>
            <NavLink activeClassName='active' to='/login'>
            Login
          </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="#NewsContainer">
              News
          </NavItem>
          <NavItem className="nav-item" eventKey={4}>
              Podcasts
          </NavItem>
          <NavItem className="nav-item" eventKey={6}>
              Youtube
          </NavItem>
          <NavItem className="nav-item log-in" eventKey={7}>
            Login
        </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
</BrowserRouter>
    );
  }
}

/* <Nav pullRight>
  <NavItem eventKey={1} href="#">Link Right</NavItem>
  <NavItem eventKey={2} href="#">Link Right</NavItem>
</Nav> */

/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
<MenuItem eventKey={3.1}>Action</MenuItem>
<MenuItem eventKey={3.2}>Another action</MenuItem>
<MenuItem eventKey={3.3}>Something else here</MenuItem>
<MenuItem divider />
<MenuItem eventKey={3.3}>Separated link</MenuItem>
</NavDropdown> */
