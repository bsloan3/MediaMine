import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
import axios from 'axios';


export default class LoginContainer extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.submitLogIn = this.submitLogIn.bind(this)
  }
  submitLogIn(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/login', {
      user: {
        email: this.state.email,
        password: this.state.password
      },
    }).then(res => {
      debugger
      console.log(res)
      this.setState({email: res.email})
    }).catch(error => {
    console.log(error.res)
  });
  }

  getValidationState() {
     const length = this.state.username.length;
     if (length > 10) return 'success';
     else if (length > 5) return 'warning';
     else if (length > 0) return 'error';
     return null;
   }

     handleChange(e) {
       this.setState({ email: e.target.value });
     }

     handlePassword(e) {
       this.setState({ password: e.target.value});
     }


  render() {
    return (
      <div>
        <form onSubmit={this.submitLogIn}>
          <FormGroup controlId="formHorizontalEmail"
            validationState={this.getValidationState(this)}
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
