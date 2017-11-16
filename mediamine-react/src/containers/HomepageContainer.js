import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignUpComponents/SignupContainer'

class HomepageContainer extends Component {
    constructor (props) {
        super(props);
    }


    render () {
      return (
      <div className="homepage-containers">

          <div className="vid-info">
    	       <h1>Welcome To MediaMine</h1>
    	        Every day, millions of people consume media from all types of platforms. Podcasts, TV, Movies, Sports, News, the list goes on. MediaMine looks to make this consumption process a bit easier by creating a personalized interactive dashboard that acts as a one stop shop for all your media consumption. Gone are the days of forgetting your TV schedule and missing an episode. You won't ever need to ask your friend when the new Marvel Movie comes out. Everything you need is right here!
          </div>


        <LoginContainer />
        <SignupContainer />
    </div>
        );
      }
    }

export default HomepageContainer;
