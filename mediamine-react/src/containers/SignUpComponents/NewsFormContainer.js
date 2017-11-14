import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Button} from 'react-bootstrap'

export default class NewsFormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      sources: [],
      news: {
      outlet_name: ''
    }
  }
  this.addNews = this.addNews.bind(this)
}

addNews(source){
  let my_url = 'http://localhost:5000/users/'+sessionStorage.user_id+'/news';
  let data = {
    user_id: sessionStorage.user_id,
    news: {
      outlet_name: source
      }
    }
  axios.post(my_url, data).then(res => {
    window.location.reload()
    });
  }

  render() {
    let {source} = this.props
    return(
      <div>
          <Button onClick={this.addNews.bind(null, source)}>
            <h4>Add Source</h4>
          </Button>
      </div>

    );
  }
}
