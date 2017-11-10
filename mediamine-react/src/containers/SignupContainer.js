import React, { Component } from 'react';
import axios from 'axios';

export default class SignupContainer extends Component {
  constructor(){
   super()
   this.state = {
     username: '',
     email: '',
     password: ''
   }
   this.submitSignIn = this.submitSignIn.bind(this)
  }
  submitSignIn(e) {
    debugger
    e.preventDefault()
    axios.post('http://localhost:5000/users', {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      },
    }).then((res) => {"Woot!"})
    .catch((err) => console.log(err));
  }

  render() {

    return (
      <div>

      </div>
    );
  }
}
