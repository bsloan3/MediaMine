import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';


class UserFormContainer extends Component {
    render () {
      return (
        <div>
          <SportsSignUp />
          <MovieSignUp />
          <NewsSignUp />
          <PodcastsContainer />
          <
        </div>
        );
      }
    }

export default UserFormContainer;
