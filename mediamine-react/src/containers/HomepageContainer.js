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
        <Link className="homepage-nav" activeClassName='active' to='/login'>
        <div className="login-button-word">Login</div>
      </Link>
          <Link className="homepage-nav" activeClassName='active' to='/signup'>
          <div className="signup-button-word">Register</div>
          </Link>

      <div className="video-background">
        <div className="video-foreground">
          <iframe src=
            "https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&mute=true&loop=13&playlist=W0LHTWG-UmQ"
          frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
      <div id="vidtop-content">
        <div className="vid-info">
    	  <h1>YouTube Fullscreen Background Demo</h1>
    	  The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.
         Original timelapse by Riccardo Rossi (ISAA), used under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Raw photos courtesy of http://eol.jsc.nasa.gov/
    	 <a href="/500/Use-YouTube-Videos-as-Fullscreen-Web-Page-Backgrounds">Full article</a>
      </div>
    </div>
  </div>
        );
      }
    }

export default HomepageContainer;
