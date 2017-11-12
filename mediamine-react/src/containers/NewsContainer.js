import React, { Component } from 'react';
import SourceContainer from './NewsComponents/SourceContainer';

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
        {this.state.news_sources.map(function (source) {
          return (
            <div style={{width: '45%', height: '50%', overflowY: 'scroll', border: 'solid'}}>
              <SourceContainer source={source}/>
            </div>
          )
        })}
      </div>
    );
  }
}
