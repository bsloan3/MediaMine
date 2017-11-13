import React, { Component } from 'react';

export default class MLBScoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/mlb/2017-regular/scoreboard.json?fordate=20170722`,
    {
      headers: {"Authorization": "Basic " + btoa("najahizquierdo" + ":" + "RLgrime1")
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({scores: responseJson.scoreboard.gameScore});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (
      <div>
        <h3>MLB Scores</h3>
        <div className="standings">
          {this.state.scores.map(function (game, i) {
            return (
              <div key={i}>
                {game.game.homeTeam.Abbreviation} {game.homeScore} - {game.game.awayTeam.Abbreviation} {game.awayScore}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
