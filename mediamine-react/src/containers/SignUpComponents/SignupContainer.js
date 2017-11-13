import React, { Component } from 'react';
import {FormControl, Col, ControlLabel, FormGroup, Button} from 'react-bootstrap';
import axios from 'axios';

export default class SignupContainer extends Component {
  constructor(){
   super()
   this.state = {
     username: '',
     email: '',
     password: '',
     phone_number: ''
   }
   this.submitSignUp = this.submitSignUp.bind(this)
  }
  submitSignUp(e) {
    // debugger
    e.preventDefault()
    axios.post('http://localhost:5000/users', {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phone_number
      },
    }).then(res => {
    if (res.status === 200) {
      this.setState({
        username: res.username,
        email: res.email,
        password: res.password,
        phone_number: res.phone_number
      })
        sessionStorage.setItem("user_id", res.data.id);
        this.props.history.push('/')
       }
      }).catch(err => {
        console.log(err.res)
    });
  }
   handleChange(e) {
     this.setState({ email: e.target.value });
   }

   handlePassword(e) {
     this.setState({ password: e.target.value});
   }
   handleUsername(e) {
     this.setState({ username: e.target.value });
   }
   handleNumber(e) {
     this.setState({ phone_number: e.target.value });
   }

  render() {

    return (

      <div>
      <div className="sign-up">
        	<div className="main-login main-center">
            <img src="./images/photo.jpg" height="200" align="center"></img>
          <form onSubmit={this.submitSignUp}>
            <div className="form-group">
							<label for="name" classNameName="cols-sm-2 control-label">Username</label>
                <FormControl
                  type="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleUsername.bind(this)} />
                  <FormControl.Feedback />
                </div>

            <div className="form-group">
    					 <label for="name" className="cols-sm-2 control-label">Email</label>
                <FormControl
                  type="email"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.handleChange.bind(this)}
                />
              <FormControl.Feedback />
            </div>
            <div className="form-group">
						   <label for="name" className="cols-sm-2 control-label">Password</label>
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handlePassword.bind(this)}
                />
              <FormControl.Feedback />
            </div>
            <div className="form-group">
						   <label for="name" className="cols-sm-2 control-label">Phone Number</label>
                <FormControl
                  type="phone_number"
                  value={this.state.phone_number}
                  placeholder="Phone Number"
                  onChange={this.handleNumber.bind(this)}
                />
              <FormControl.Feedback />
            </div>
            <div className="login-button">
            <Button className="btn btn-danger btn-block" type="submit" >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
}
