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
        <div>
          {this.state.scores.map(function (game, i) {
            return (
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
                    {game.quarterSummary.quarter.map(function (quarter, i) {
                      return(
                        <th>{quarter['@number']}</th>
                      )
                    })}
                  </tr>
                  <tr>
                    <th>{game.game.homeTeam.Abbreviation}</th>
                    {game.quarterSummary.quarter.map(function (quarter, i) {
                      return(
                        <th>{quarter.homeScore}</th>
                      )
                    })}
                  </tr>
                  <tr>
                    <th>{game.game.awayTeam.Abbreviation}</th>
                    {game.quarterSummary.quarter.map(function (quarter, i) {
                      return(
                        <th>{quarter.awayScore}</th>
                      )
                    })}
                  </tr>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
