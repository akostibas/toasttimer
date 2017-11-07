import React, { Component } from 'react';
import './speechButton.css';


class SpeechButton extends Component {
  sayHi() {
    alert("Hi!");
  }

  render() {
    return (
      <div className="SpeechButton" onClick={ this.sayHi }>
        <p>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SpeechButton;
