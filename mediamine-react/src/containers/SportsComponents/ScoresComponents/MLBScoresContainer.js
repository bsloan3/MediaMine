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

                  <div className="innings">
                    {game.game.homeTeam.Abbreviation}
                    {game.inningSummary.inning.map(function (inning, i) {
                      return(
                        <div className="inning" key={i}>
                          {inning.homeScore}
                        </div>
                      )
                    })}
                  </div>
                <div className="innings">
                  {game.game.awayTeam.Abbreviation}
                  {game.inningSummary.inning.map(function (inning, i) {
                    return(
                      <div className="inning" key={i}>
                        {inning.awayScore}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}
