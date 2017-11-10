import React, { Component } from 'react';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      embed_links:[]
    };
  }

  componentDidMount(){
    fetch('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=e8b2d0f14dda4bbab3642252adb4ed25')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({embed_links: responseJson.articles});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="page_container">

        <h1 style={{marginTop: '5%'}}> News </h1>
        <h3 style={{marginTop: '5%'}}> News </h3>
        <div style={{width: '50%', height: '50%', overflowY: 'scroll', border: 'solid'}}>
          {this.state.embed_links.map(function (article) {
            return (
              <div>
                <img style={{width: '70%', height: '70%'}} src={article.urlToImage}/>
                <h4><a href={article.url} target="_blank">{article.title}</a></h4>
                <p>Author: {article.author}</p>
                <p>{article.description}</p>
              </div>
              )
          })}
        </div>
      </div>
    );
  }
}
