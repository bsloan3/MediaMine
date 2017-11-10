import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import axios from 'axios';


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
      this.props.history.push('/')
    }).catch((res) => {
      sessionStorage.clear()
    })
  }

  render() {
    if(sessionStorage.length === 0){
    return (
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
              <Link activeClassName='active' to='/signup'>
              Sign Up
            </Link>
          </NavItem>
          <NavItem className="nav-item" eventKey={2}>
            <Link activeClassName='active' to='/login'>
            Login
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>

    );
  }
    else{
      return(
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
          <NavItem className="nav-item" eventKey={1} href="#SportsContainer">
            Sports
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
          <NavItem className="nav-item" onClick={this.logOut}>
            <Link activeClassName='active' to='/logout'>
            Log Out
          </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>

    );
    }
  }
}
