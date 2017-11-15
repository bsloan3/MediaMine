import React, { Component } from 'react';
import Calendar from './CalendarComponents/Calendar';

export default class CalendarContainer extends Component {
  render() {
    let {
      events
    } = this.props
    return (
      <div>
        <Calendar events={events}/>
      </div>
    );
  }
}
