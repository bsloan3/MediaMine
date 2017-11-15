import React, { Component } from 'react';
import Calendar from './CalendarComponents/Calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default class CalendarContainer extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}
