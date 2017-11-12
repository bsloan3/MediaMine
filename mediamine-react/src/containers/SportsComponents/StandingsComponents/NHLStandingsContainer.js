import React, { Component } from 'react';

export default class NHLStandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standings:[]
    };
  }

  componentDidMount(){
    fetch(`https://api.mysportsfeeds.com/v1.1/pull/nhl/2017-2018-regular/conference_team_standings.json?teamstats=W,L,GF,GA,Pts`,
    {
      headers: {"Authorization": "Basic " + btoa("najahizquierdo" + ":" + "RLgrime1")
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({standings: responseJson.conferenceteamstandings.conference});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (
      <div>
        <h3> NHL Standings </h3>
        <div className="standings">
          {this.state.standings.map(function (conf, i) {
            return (
              <div key={i}>
                <h4>{conf["@name"]}</h4>
                {conf.teamentry.map(function (team, i) {
                  return (
                    <div key={i}>
                      <p>{team.rank} | {team.team.City} {team.team.Name} | W {team.stats.stats.Wins["#text"]} | L {team.stats.stats.Losses["#text"]} | GP {team.stats.GamesPlayed["#text"]} | GF {team.stats.stats.GoalsFor["#text"]} | GA {team.stats.stats.GoalsAgainst["#text"]}</p>
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
