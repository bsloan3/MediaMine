import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Route, Link, NavLink} from 'react-router-dom';
import PodcastContainer from './PodcastContainer';
import PodcastDisplay from './SignUpForms/PodcastDisplay';
import NewsFormContainer from './NewsFormContainer';
import NewsDisplay from './NewsDisplay'
import SportsSignUp from './SportsSignUp'
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
          {/* <PodcastContainer onUpdate={this.updateResult} />
          <PodcastDisplay onUpdate={this.updateResult} /> */}
          <NewsDisplay  />
          <SportsSignUp />
        </div>
{/*
          <MovieSignUp />
          <PodcastsContainer />  */}
        </div>
        );
      }
    }

export default UserFormContainer;
