import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends Component {
  render() {
    return(
      <div className="calendar_container calendar-page-container" style={{paddingTop: '5%', textAlign: 'center'}}>
        <BigCalendar
          events={this.props.events}
          defaultDate={new Date(2017, 10, 1)}
        />
      </div>
  )
  }
}
