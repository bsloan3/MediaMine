import React, { Component } from 'react';
import SourceContainer from './NewsComponents/SourceContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_sources:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+sessionStorage.user_id+'/news/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({news_sources: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="page_container news-page-container">
        <h1 style={{paddingRight: '5%', paddingTop: '4%', paddingBottom: '2%', color: 'white', textAlign: 'right'}}> News </h1>
        <div style={{width: '75%', height: '80%', margin: '0 auto', overflowY: 'scroll', backgroundColor: 'Gainsboro'}}>
          <Tabs>
            <TabList>
            {this.state.news_sources.map(function (source) {
                return (
                  <Tab style={{textTransform: 'uppercase'}}> {source} </Tab>
                )
              })}
            </TabList>
            {this.state.news_sources.map(function (source) {
              return (
                <div>
                  <TabPanel>
                    <SourceContainer source={source}/>
                  </TabPanel>
                </div>
              )
            })}
          </Tabs>
        </div>
      </div>
    );
  }
}
