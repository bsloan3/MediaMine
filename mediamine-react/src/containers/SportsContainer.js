import React, { Component } from 'react';
import SportsNewsContainer from './SportsComponents/SportsNewsContainer';
import NBAStandingsContainer from './SportsComponents/StandingsComponents/NBAStandingsContainer';
import NHLStandingsContainer from './SportsComponents/StandingsComponents/NHLStandingsContainer';
import NFLStandingsContainer from './SportsComponents/StandingsComponents/NFLStandingsContainer';
import MLBStandingsContainer from './SportsComponents/StandingsComponents/MLBStandingsContainer';

export default class SportsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sports_data:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/sports/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({sports_data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="page_container">
        <h1 style={{marginTop: '5%'}}> Sports </h1>

        <div style={{width: '45%', height: '50%', overflowY: 'scroll', border: 'solid'}}>
          <SportsNewsContainer />
        </div>
        <div style={{width: '45%', height: '50%', overflowY: 'scroll', border: 'solid'}}>
          <NBAStandingsContainer />
          <NFLStandingsContainer />
          <MLBStandingsContainer />
          <NHLStandingsContainer />
        </div>
      </div>
    );
  }
}
