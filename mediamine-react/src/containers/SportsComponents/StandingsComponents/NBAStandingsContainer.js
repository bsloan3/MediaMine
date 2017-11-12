import React, { Component } from 'react';

export default class NBAStandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/nba/2017-2018-regular/playoff_team_standings.json?teamstats=W,L,PTS,PTSA`,
    {
      headers: {"Authorization": "Basic " + btoa("najahizquierdo" + ":" + "RLgrime1")
    }
  })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({standings: responseJson.playoffteamstandings.conference});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (
      <div>
        <h3> Standings </h3>
        <div className="standings">
          {this.state.standings.map(function (conf, i) {
            return (
              <div key={i}>
                <h4>{conf["@name"]}</h4>
                {conf.teamentry.map(function (team, i) {
                  return (
                    <div key={i}>
                      <p>{team.rank} | {team.team.City} {team.team.Name} | W {team.stats.Wins["#text"]} | L {team.stats.Losses["#text"]} | GP {team.stats.GamesPlayed["#text"]} | PF {team.stats.Pts["#text"]} | PA {team.stats.PtsAgainst["#text"]}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
