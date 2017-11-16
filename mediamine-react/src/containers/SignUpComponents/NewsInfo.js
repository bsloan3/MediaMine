import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import NewsFormContainer from './NewsFormContainer'

export default class NewsDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      sources: [],
      icons: {
      'abc-news-au': './images/news_icons/icon-1.png',
       'al-jazeera-english': './images/news_icons/icon-14.png',
       'ars-technica': './images/news_icons/icon-1.png',
       'associated-press': './images/news_icons/icon-2.png',
       'bbc-news': './images/news_icons/icon-3.png',
       'bbc-sport': './images/news_icons/icon-4.png',
       'bloomberg': './images/news_icons/icon-6.png',
       'breitbart-news': './images/news_icons/icon-7.png',
       'business-insider': './images/news_icons/icon-8.png',
       'business-insider-uk': './images/news_icons/icon-8.png',
       'buzzfeed': './images/news_icons/icon-9.png',
       'cnbc': './images/news_icons/icon-10.png',
       'cnn': './images/news_icons/icon-11.png',
       'daily-mail': './images/news_icons/icon-12.png',
       'engadget': './images/news_icons/icon-16.png',
       'entertainment-weekly': './images/news_icons/icon-17.png',
       'espn': './images/news_icons/icon-15.png',
       'espn-cric-info': './images/news_icons/icon-18.png',
       'financial-times': './images/news_icons/icon-19.png',
       'football-italia': './images/news_icons/icon-21.png',
       'fortune': './images/news_icons/icon-1.png',
       'four-four-two': './images/news_icons/icon-22.png',
       'fox-sports': './images/news_icons/icon-23.png',
       'google-news': './images/news_icons/icon-24.png',
       'hacker-news': './images/news_icons/icon-26.png',
       'ign': './images/news_icons/icon-28.png',
       'independent': './images/news_icons/icon-29.png',
       'mashable': './images/news_icons/icon-30.png',
       'metro': './images/news_icons/icon-1.png',
       'mirror': './images/news_icons/icon-31.png',
       'mtv-news': './images/news_icons/icon-32.png',
       'mtv-news-uk': './images/news_icons/icon-33.png',
       'national-geographic': './images/news_icons/icon-34.png',
       'new-scientist': './images/news_icons/icon-35.png',
       'newsweek': './images/news_icons/icon-36.png',
       'new-york-magazine': './images/news_icons/icon-37.png',
       'nfl-news': './images/news_icons/icon-38.png',
       'polygon': './images/news_icons/icon-39.png',
       'recode': './images/news_icons/icon-40.png',
       'reddit-r-all': './images/news_icons/icon-41.png',
       'reuters': './images/news_icons/icon-42.png',
       'talksport': './images/news_icons/icon-45.png',
       'techcrunch': './images/news_icons/icon-46.png',
       'techradar': './images/news_icons/icon-47.png',
       'the-economist': './images/news_icons/icon-48.png',
       'the-guardian-au': './images/news_icons/icon-49.png',
       'the-guardian-uk': './images/news_icons/icon-49.png',
       'the-hindu': './images/news_icons/icon-1.png',
       'the-huffington-post': './images/news_icons/icon-51.png',
       'the-lad-bible': './images/news_icons/icon-52.png',
       'the-new-york-times': './images/news_icons/icon-53.png',
       'the-next-web': './images/news_icons/icon-54.png',
       'the-sport-bible': './images/news_icons/icon-55.png',
       'the-telegraph': './images/news_icons/icon-56.png',
       'the-times-of-india': './images/news_icons/icon-57.png',
       'the-verge': './images/news_icons/icon-58.png',
       'the-wall-street-journal': './images/news_icons/icon-59.png',
       'the-washington-post': './images/news_icons/icon-1.png',
       'time': './images/news_icons/icon-60.png',
       'usa-today': './images/news_icons/icon-61.png'
      }
    };
  }

  componentDidMount(){
    fetch(`https://newsapi.org/v1/sources?language=en`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({sources: responseJson.sources});
        // console.log(this.state.sources)
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
      return(
        // <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        //   <div className="modal-dialog modal-lg" role="document">
    <div>
          <h1 style={{textAlign:'center'}}> Choose your favorite news sources (scroll for more)! </h1>
          <div style={{width: '80%', height: '90VH', overflowY: 'scroll', margin:'0 auto'}}>
          {this.state.sources.map(function (source, i) {
            return (
              <div key={i} className="news-list">
                <p>{source.name}</p>
                <img className="news-icon" src={this.state.icons[source.id]} />
                <NewsFormContainer source={source.id} name={source.name}/>
              </div>
            )
          }.bind(this))
        }
      </div>
    </div>


    )
  }
}
