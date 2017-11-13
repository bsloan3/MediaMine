import React, { Component } from 'react';

export default class NBAScoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/scoreboard.json?fordate=20171105`,
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
        <h3>NBA Scores</h3>
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
