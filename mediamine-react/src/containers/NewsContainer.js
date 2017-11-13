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
      <div className="page_container">
        <h1 style={{marginTop: '5%'}}> News </h1>
        <div style={{width: '75%', height: '90%', margin: '0 auto', overflowY: 'scroll', border: 'solid'}}>
          <Tabs>
            <TabList>
            {this.state.news_sources.map(function (source) {
                return (
                  <Tab style={{marginTop: '3%', textTransform: 'uppercase'}}> {source} </Tab>
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
