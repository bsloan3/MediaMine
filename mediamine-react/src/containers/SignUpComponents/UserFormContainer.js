import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import PodcastContainer from './PodcastContainer'

class UserFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {result: []}
    this.updateResult = this.updateResult.bind(this);
  }
  updateResult(newResult){
    this.setState({result: newResult})
  }
    render () {
      return (
      <div className="user-form">
        <div id="PodcastsContainer">
          <PodcastContainer onUpdate={this.updateResult} />
        </div>
          {/* <SportsSignUp />
          <MovieSignUp />
          <NewsSignUp />
          <PodcastsContainer /> */}
        </div>
        );
      }
    }

export default UserFormContainer;
