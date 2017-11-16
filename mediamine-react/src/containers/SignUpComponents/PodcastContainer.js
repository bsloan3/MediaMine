import React, { Component } from 'react';
import $ from 'jquery';
import PodcastDisplay from './SignUpForms/PodcastDisplay'
import {Button} from 'react-bootstrap'
import PodcastSearch from './PodcastSearch'

export default class PodcastContainer extends Component {
    render() {
      return(
        <div className="modal fade bs-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-body">
              <PodcastSearch />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
      </div>
    </div>

    );
  }
}
