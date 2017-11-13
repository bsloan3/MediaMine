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
      <div className="page_container">
        <h1 style={{marginTop: '5%'}}> Sports </h1>
        <div style={{width: '75%', height: '90%', margin: '0 auto', overflowY: 'scroll', border: 'solid'}}>
          <Tabs>
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
              </Tabs>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
