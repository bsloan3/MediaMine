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
    if (res.status === 200) {
      this.setState({email: res.email})
      sessionStorage.setItem("user_id", res.data.id);
      console.log(this.props)
      this.props.history.push('/')
      window.location.reload()
    }
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

      <div className='popup'>
       <div className='popup_inner'>
         <div className="logincontainer">
        <form onSubmit={this.submitLogIn}>
          <FormGroup controlId="formHorizontalEmail"
            validationState={this.getValidationState(this)}
          >
          <FormControl
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange.bind(this)}
              />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword"
            validationState={this.getValidationState()}>
          <FormControl
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handlePassword.bind(this)}
            />
            <FormControl.Feedback />
          </FormGroup>
        <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button onClick={this.props.closePopup} type="submit">
            Log In
          </Button>
        </Col>
      </FormGroup>
      </form>

      </div>
    </div>
      </div>
    );
  }
}
