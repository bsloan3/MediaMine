import React, { Component } from 'react';

export default class NFLScoresContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/scoreboard.json?fordate=20171112`,
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
        <h3>NFL Scores</h3>
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
