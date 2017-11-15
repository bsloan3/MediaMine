import React, {Component} from 'react';
import axios from 'axios'
import {Button} from 'react-bootstrap';
class SportsSignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      sportInfo: [],
      hockey: 'nhl',
      baseball: 'mlb',
      football: 'nhl',
      basketball: 'nba',
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
      this.setState({data: res })
      console.log(res)
    });
  }

  render(){
    return(
      <div>

        <Button onClick={this.addSport.bind(this, this.state.hockey)}> NHL </Button>
        <Button onClick={this.addSport.bind(this, this.state.baseball)}> MLB </Button>
        <Button onClick={this.addSport.bind(this, this.state.football)}> NFL </Button>
        <Button onClick={this.addSport.bind(this, this.state.basketball)}> NBA </Button>

       </div>
    )
  }
}

export default SportsSignUp;
