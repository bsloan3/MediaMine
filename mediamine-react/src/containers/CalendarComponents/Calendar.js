import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import queryString from 'query-string';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

function getMovies () {
  return axios.get('http://localhost:5000/users/'+sessionStorage.user_id+'/movies/')
  .then(function (cal){
    return cal.movies
  });
}

export default class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: null,
    }
  }

  componentDidMount() {
    getMovies()
    // fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/movies/')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({embed_links: responseJson});
    //     console.log(responseJson)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }


  render() {
    BigCalendar.momentLocalizer(moment);
    const MyCalendar = props => (
      <div style={{paddingTop: '5%', textAlign: 'center'}}>
        <BigCalendar

          events={[  {
    'title': 'All Day Event very long title',
    'allDay': true,
    'start': new Date(2017, 11, 0),
    'end': new Date(2017, 11, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 11, 7),
    'end': new Date(2017, 11, 10)
  }]}
          defaultDate={new Date(2017, 11, 1)}
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
