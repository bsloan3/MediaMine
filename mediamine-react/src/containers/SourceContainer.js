import React, { Component } from 'react';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch(`https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=top&apiKey=e8b2d0f14dda4bbab3642252adb4ed25`)
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
        <h3 style={{marginTop: '3%', textTransform: 'uppercase'}}> {this.state.source} </h3>
        {this.state.embed_links.map(function (article) {
          return (
            <div>
              <div className="news-img">
                <img style={{width: '70%', height: '70%'}} src={article.urlToImage}/>
                <a className="news-article" href={article.url} target="_blank">{article.title}</a>
              </div>
              <p>Author: {article.author}</p>
              <p>{article.description}</p>
            </div>
            )
        })}
      </div>
    );
  }
}
