import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
const {className, style, onClick} = props
return (
  <div
    className={className}
    style={{...style, display: 'block'}}
    onClick={onClick}
  ></div>
);
}

function SamplePrevArrow(props) {
const {className, style, onClick} = props
return (
  <div
    className={className}
    style={{...style, display: 'block'}}
    onClick={onClick}
  ></div>
);
}

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
    var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          style: {
            height: "50VH"
          }
        };
    return (
      <div>
        <Slider {...settings}>
          {this.state.embed_links.map(function (article) {
            return (
              <div>
                <div className="news-img">
                  <img src={article.urlToImage}/>
                  <a className="news-article" href={article.url} target="_blank">{article.title}</a>
                </div>
                <div className="article-description">
                  {article.description}
                  {article.author}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}
