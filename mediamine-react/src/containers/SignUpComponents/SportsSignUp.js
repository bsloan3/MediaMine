import React, {Component} from 'react';
import axios from 'axios'
import {Button} from 'react-bootstrap';
class SportsSignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      sportInfo: [],
      sports: {
        team_name: '',
        league_name: ''
      }
    }
    this.addSport = this.addSport.bind(this)
  }
  addSport(sport){
    let my_url = 'http://localhost:5000/users/'+sessionStorage.user_id+'/sports'
    let data = {
      user_id: sessionStorage.user_id,
      sports: {
        league_name: sport
      }
    }
    axios.post(my_url, data).then(res => {


      window.location.reload()
    });
  }

  render(){
    return(
      <div>

        <Button onClick={this.addSport} value="nhl"> NHL </Button>
        <Button onClick={this.addSport} value="mlb"> MLB </Button>
        <Button onClick={this.addSport} value="nfl"> NFL </Button>
        <Button onClick={this.addSport} value="nba"> NBA </Button>


       </div>
    )
  }
}

export default SportsSignUp;
