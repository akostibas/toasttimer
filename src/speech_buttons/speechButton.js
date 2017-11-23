import React, { Component } from 'react';
import './speechButton.css';
import { Link } from 'react-router-dom'

class SpeechButton extends Component {
  render() {
    return (
      <Link to="/timer">
        <div className="SpeechButton">
          <p>
            {this.props.name}
          </p>
        </div>
      </Link>
    );
  }
}

export default SpeechButton;
