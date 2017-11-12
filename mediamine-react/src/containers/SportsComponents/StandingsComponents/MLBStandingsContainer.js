import React, { Component } from 'react';

export default class MLBStandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/mlb/2017-regular/division_team_standings.json?teamstats=W,L,RF,RA`,
    {
      headers: {"Authorization": "Basic " + btoa("najahizquierdo" + ":" + "RLgrime1")
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({standings: responseJson.divisionteamstandings.division});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (
      <div>
        <h3>MLB Standings</h3>
        <div className="standings">
          {this.state.standings.map(function (conf, i) {
            return (
              <div key={i}>
                <h4>{conf["@name"]}</h4>
                {conf.teamentry.map(function (team, i) {
                  return (
                    <div key={i}>
                      <p>{team.rank} | {team.team.City} {team.team.Name} | W {team.stats.Wins["#text"]} | L {team.stats.Losses["#text"]} | GP {team.stats.GamesPlayed["#text"]} | RF {team.stats.RunsFor["#text"]} | RA {team.stats.RunsAgainst["#text"]}</p>
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
