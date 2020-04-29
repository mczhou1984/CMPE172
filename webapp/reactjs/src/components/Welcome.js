import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

export default class Welcome extends Component {
    render() {
      return (
            <Jumbotron className="bg-dark text-white">
              <h1>Workforce Data Entry</h1>
                <p>
                Welcome to the Workforce Data Entry Page!
                </p>
            </Jumbotron>
        );
    }
}
