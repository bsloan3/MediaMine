import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import queryString from 'query-string';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

// function getCalendarEvents(user_id) {
//   return
// }

export default class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    var user_id = sessionStorage.user_id;
    axios.get('http://localhost:5000/users/' + user_id + '/calendarevents/')
    .then( cal => {
      this.setState({events: cal.data});
    })
    .catch(err => {
    });
  }


  render() {
    var events = this.state.events
    BigCalendar.momentLocalizer(moment);
    const MyCalendar = props => (
      <div style={{paddingTop: '5%', textAlign: 'center'}}>
        <BigCalendar
          events={events}
          defaultDate={new Date()}
        />
      </div>
    );
    return(
      <div>
        {MyCalendar()}
      </div>
    )
  }
}
