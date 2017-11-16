import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import NewsFormContainer from './NewsFormContainer'
import NewsInfo from './NewsInfo'

export default class NewsDisplay extends Component {
  constructor(props){
    super(props)

  }
  refresh(){
    window.location.assign('/#NewsContainer');
  }
    render() {
      return(

    <div>
      <div className="modal fade bs-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-body">
            <NewsInfo />
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.refresh}>Close</button>
        </div>
    </div>
  </div>
</div>
</div>

    )
  }
}
