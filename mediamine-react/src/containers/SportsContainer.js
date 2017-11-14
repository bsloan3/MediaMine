import React, { Component } from 'react';
import SportsNewsContainer from './SportsComponents/SportsNewsContainer';
import NFLScoresContainer from './SportsComponents/ScoresComponents/NFLScoresContainer';
import NBAScoresContainer from './SportsComponents/ScoresComponents/NBAScoresContainer';
import MLBScoresContainer from './SportsComponents/ScoresComponents/MLBScoresContainer';
import NHLScoresContainer from './SportsComponents/ScoresComponents/NHLScoresContainer';
import NBAStandingsContainer from './SportsComponents/StandingsComponents/NBAStandingsContainer';
import NHLStandingsContainer from './SportsComponents/StandingsComponents/NHLStandingsContainer';
import NFLStandingsContainer from './SportsComponents/StandingsComponents/NFLStandingsContainer';
import MLBStandingsContainer from './SportsComponents/StandingsComponents/MLBStandingsContainer';
import NBAMyteamContainer from './SportsComponents/MyteamComponents/NBAMyteamContainer';
import NHLMyteamContainer from './SportsComponents/MyteamComponents/NHLMyteamContainer';
import NFLMyteamContainer from './SportsComponents/MyteamComponents/NFLMyteamContainer';
import MLBMyteamContainer from './SportsComponents/MyteamComponents/MLBMyteamContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class SportsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sports_data:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/sports/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({sports_data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="page_container sports-page-container">
        <h1 style={{paddingRight: '5%', paddingTop: '4%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> Sports </h1>
          <Tabs style={{height: '70VH'}}>
            <TabList>
              <Tab>News</Tab>
              <Tab>Scores</Tab>
              <Tab>Standings</Tab>
            </TabList>

            <TabPanel>

                <SportsNewsContainer />

            </TabPanel>

            <TabPanel>
              <Tabs>
                <TabList>
                  <Tab>NBA Scores</Tab>
                  <Tab>NFL Scores</Tab>
                  <Tab>MLB Scores</Tab>
                  <Tab>NHL Scores</Tab>
                </TabList>
                <div style={{width: '90%', height: '70VH', margin: '0 auto', overflowY: 'scroll'}}>
                  <TabPanel>
                    <NBAScoresContainer />
                  </TabPanel>
                  <TabPanel>
                    <NFLScoresContainer />
                  </TabPanel>
                  <TabPanel>
                    <MLBScoresContainer />
                  </TabPanel>
                  <TabPanel>
                    <NHLScoresContainer />
                  </TabPanel>
                </div>
              </Tabs>
            </TabPanel>

            <TabPanel>
              <Tabs>
                <TabList>
                  <Tab>NBA Standings</Tab>
                  <Tab>NFL Standings</Tab>
                  <Tab>MLB Standings</Tab>
                  <Tab>NHL Standings</Tab>
                </TabList>

                <div style={{width: '100%', height:'60VH', margin: '0 auto', overflowY: 'scroll', color:'black', fontWeight:'bold', backgroundColor:'rgba(46, 134, 63, .7)'}}>
                  <TabPanel>
                    <NBAStandingsContainer />
                  </TabPanel>
                  <TabPanel>
                    <NFLStandingsContainer />
                  </TabPanel>
                  <TabPanel>
                    <MLBStandingsContainer />
                  </TabPanel>
                  <TabPanel>
                    <NHLStandingsContainer />
                  </TabPanel>
                </div>
              </Tabs>
            </TabPanel>

          </Tabs>
      </div>
    );
  }
}
