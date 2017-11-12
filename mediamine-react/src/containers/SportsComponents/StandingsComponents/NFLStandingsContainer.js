import React, { Component } from 'react';

export default class NFLStandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/division_team_standings.json?teamstats=W,L,T,PF,PA `,
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
        <h3>NFL Standings</h3>
        <div className="standings">
          {this.state.standings.map(function (conf, i) {
            return (
              <div key={i}>
                <h4>{conf["@name"]}</h4>
                {conf.teamentry.map(function (team, i) {
                  return (
                    <div key={i}>
                      <p>{team.rank} | {team.team.City} {team.team.Name} | W {team.stats.Wins["#text"]} | L {team.stats.Losses["#text"]} | T {team.stats.Ties["#text"]} | GP {team.stats.GamesPlayed["#text"]} | PF {team.stats.PointsFor["#text"]} | PA {team.stats.PointsAgainst["#text"]}</p>
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
