import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios';
import {FormControl, Col, ControlLabel, FormGroup, Button} from 'react-bootstrap';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      description: ''
    }
    this.addEvent = this.addEvent.bind(this)
  }

  addEvent(e){
    e.preventDefault()
    axios.post('http://localhost:5000/users/'+sessionStorage.user_id+'/events', {
      event: {
        title: this.state.title,
        description: this.state.description
      },
    }).then(res => {
      if(res.status === 200) {
        this.setState({
          title: res.title,
          description: res.description
        })
        sessionStorage.setItem("user_id", res.data.id);
      }
    }).catch(err => {
      console.log(err.res)
    });
  }
  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value});
  }
 ///// You have to put onChange={this.handleDescription.bind(this)}
 //// in the form so it knows which information to take in



  render() {
    return(
      <div className="calendar_container calendar-page-container" style={{paddingTop: '5%', textAlign: 'center'}}>
        <BigCalendar
          events={this.props.events}
          defaultDate={new Date()}
        />

        {/* <form onSubmit={this.addEvent} />
        <div className="form-group">
          <label className="cols-sm-2 control-label">Title </label>
          <FormControl
            type="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleTitle.bind(this)} />
            <FormControl.Feedback />
        </div>

          <div className="form-group">
            <label className="cols-sm-2 control-label">Description</label>
            <FormControl
              type="description"
              value={this.state.description}
              placeholder="Description"
              onChange={this.handleDescription.bind(this)}
            />
            <FormControl.Feedback />
          </div>

            <div className="login-button">
            <Button className="btn btn-danger btn-block" type="submit">
              Register
            </Button>
          </div> */}
      </div>
  )
  }
}
