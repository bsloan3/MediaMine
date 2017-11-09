import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Link to={'/login'}>
        <h1> Hello! </h1>
      </Link>
    </Router>

    );
  }
}

export default App;
