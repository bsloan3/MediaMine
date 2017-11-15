import React, { Component } from 'react';

export default class CountDown extends Component {
  constructor(){
    super();
    this.state = {
      target_date: '',
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  getCountdown(){

    // find the amount of "seconds" between now and target
    let current_date = new Date().getTime();
    let target_date = this.state.target_date;
    let seconds_left = ( target_date - current_date) / 1000;

    let days = this.pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;

    let hours = this.pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;

    let minutes = this.pad( parseInt(seconds_left / 60) );
    let seconds = this.pad( parseInt( seconds_left % 60 ) );
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
    // format countdown string + set tag value
    // countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
  }

  pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  componentDidMount(){
    let new_dat = new Date(this.props.movie_date).getTime();
    this.setState({target_date: new_dat});

    this._shit = setInterval(this.getCountdown.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this._shit)
  }

  render() {
    let {days, hours, minutes, seconds} = this.state
    return (
      <div className="countdown">
        <div className='tiles'>
          <span>{days}</span>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </div>
        <div className="labels">
          <li>Days</li>
          <li>Hours</li>
          <li>Mins</li>
          <li>Secs</li>
        </div>
      </div>
    );
  }
}
