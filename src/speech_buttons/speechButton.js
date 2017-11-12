import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './speechButton.css';
import Timer from '../Timer.js';

class SpeechButton extends Component {
  constructor(props) {
    super(props);
    // In order for `this` to be defined in startTimer(), you have to bind it
    // like this. See: https://reactjs.org/docs/handling-events.html
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    ReactDOM.render(
      <Timer seconds={ this.props.seconds } />,
      document.getElementById('root')
    );
  }

  render() {
    return (
      <div className="SpeechButton" onClick={ this.startTimer } >
        <p>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SpeechButton;
