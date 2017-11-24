import React, { Component } from 'react';
import './speechButton.css';

class SpeechButton extends Component {
  render() {
    return (
      <div className="SpeechButton">
        <p>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SpeechButton;
