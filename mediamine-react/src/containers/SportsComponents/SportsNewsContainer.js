import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';

export default class SportsNewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch(`https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=e8b2d0f14dda4bbab3642252adb4ed25`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({embed_links: responseJson.articles, source: responseJson.source});
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (
      <div>
        <h3 style={{marginTop: '3%', marginLeft: '3%',textTransform: 'uppercase'}}> {this.state.source} </h3>
        {this.state.embed_links.map(function (article) {
          return (
            <div className="news-img">
              <img style={{width: '50%', height: '50%'}} src={article.urlToImage}/>
              <div className="news-article">
                <a href={article.url} target="_blank">{article.title}</a>
                <p>{article.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
