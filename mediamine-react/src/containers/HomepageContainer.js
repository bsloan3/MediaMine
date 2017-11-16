import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';


class HomepageContainer extends Component {
    constructor (props) {
        super(props);
    }


    render () {
      return (
      <div className="homepage-containers">
        <Link className="homepage-nav" activeClassName='active' to='/login'>
        <div className="login-button-word">Login</div>
      </Link>
          <a href='/register' className="homepage-nav" activeClassName='active'>
          <div className="signup-button-word">Register</div>
        </a>
    <div id="vidtop-content">
      <div className="vid-info">
    	  <h1>MediaMine</h1>
    	 jklsdajkldajkdjsalklksdldsjslkdjsalkdjsaldjsalkdjlskajdalk;djsalkdjsklajdksladjaskldlasdjsad
       sadsaljdsjald;ksjakldjsakldjsakldjsalkdjsalkdsakldlkasdjsakldjsakldjksladklsajdsakldsajkldsakld
       sads;kalsadjslakdjksadsajl;d
	      <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
        </div>
      </div>
    </div>
        );
      }
    }

export default HomepageContainer;
