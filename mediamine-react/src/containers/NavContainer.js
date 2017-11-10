import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


export default class NavContainer extends Component {
  render() {
    return (
    <Navbar inverse collapseOnSelect fixedTop className="navBar">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink exact activeClassName='active' to='/'>
            MediaMine
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className="nav-item" eventKey={1}>
            <NavLink activeClassName='active' to='/login'>
              Login
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={2}>
            <NavLink activeClassName='active' to='/calendar'>
              Calendar
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={3}>
            <NavLink activeClassName='active' to='/news'>
              News
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={4}>
            <NavLink activeClassName='active' to='/podcasts'>
              Podcasts
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={5}>
            <NavLink activeClassName='active' to='/signup'>
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={6}>
            <NavLink activeClassName='active' to='/sports'>
              Sports
            </NavLink>
          </NavItem>
          <NavItem className="nav-item" eventKey={7}>
            <NavLink activeClassName='active' to='/youtube'>
              Youtube
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
