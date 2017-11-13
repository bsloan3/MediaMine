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
        <div>
          {this.state.scores.map(function (game, i) {
            return (
              <div key={i}>
                <div className="complete-scoreboard" key={i}>
                  <div className="entire-scoreboard">
                    <div className="hometeam">
                      {game.game.homeTeam.Abbreviation}
                    </div>
                    <div className="scoreboard">
                      {game.homeScore} - {game.awayScore}
                    </div>
                    <div className="awayteam">
                      {game.game.awayTeam.Abbreviation}
                    </div>
                  </div>
                  <table>
                    <tr>
                      <th></th>
                      {game.inningSummary.inning.map(function (inning, i) {
                        return(
                          <th>{inning['@number']}</th>
                        )
                      })}
                    </tr>
                    <tr>
                      <th>{game.game.homeTeam.Abbreviation}</th>
                      {game.inningSummary.inning.map(function (inning, i) {
                        return(
                          <th>{inning.homeScore}</th>
                        )
                      })}
                    </tr>
                    <tr>
                      <th>{game.game.awayTeam.Abbreviation}</th>
                      {game.inningSummary.inning.map(function (inning, i) {
                        return(
                          <th>{inning.awayScore}</th>
                        )
                      })}
                    </tr>
                  </table>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}
