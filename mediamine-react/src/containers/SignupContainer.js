import React, { Component } from 'react';
import {FormControl, Col, ControlLabel, FormGroup, Button} from 'react-bootstrap';
import axios from 'axios';

export default class SignupContainer extends Component {
  constructor(){
   super()
   this.state = {
     username: '',
     email: '',
     password: ''
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
        password: this.state.password
      },
    }).then(res => {
      console.log(res)
      this.setState({
        username: res.username,
        email: res.email,
        password: res.password})
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
   getValidationState() {
     const length = this.state.username.length;
     if (length > 10) return 'success';
     else if (length > 5) return 'warning';
     else if (length > 0) return 'error';
     return null;
   }

  render() {

    return (

        <div>
          <form onSubmit={this.submitSignUp}>
            <FormGroup controlId="formHorizontalEmail"
              validationState={this.getValidationState(this)}
            >
              <Col componentClass={ControlLabel} sm={2}>
                Username:
              </Col>
              <Col sm={10}>

                <FormControl
                  type="username"
                  value={this.state.username}
                  placeholder="Enter Username"
                  onChange={this.handleUsername.bind(this)}
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                Email:
              </Col>
              <Col sm={10}>

                <FormControl
                  type="email"
                  value={this.state.email}
                  placeholder="Enter email"
                  onChange={this.handleChange.bind(this)}
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword"
              validationState={this.getValidationState()}
              >
              <Col componentClass={ControlLabel} sm={2}>
                Password:
              </Col>
              <Col sm={10}>
                <FormControl
                  type="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  onChange={this.handlePassword.bind(this)}
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>
          <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
        </form>
      </div>
    );
  }
}
