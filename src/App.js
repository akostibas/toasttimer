import React, { Component } from 'react';
import headerImage from './images/header.jpeg';
import './App.css';
import SpeechButton from './speech_buttons/speechButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{
          backgroundImage: "url('" + headerImage + "')", backgroundSize: "cover"}}>
          <h1 className="App-title">TOAST TIMER</h1>
        </header>
        <p className="App-intro">
          The free Toastmasters timer app.
        </p>
        <div className="row">
          <div className="column-third">
            <SpeechButton name="Two minute special" />
          </div>
          <div className="column-third">
            <SpeechButton name="Table topic" />
          </div>
          <div className="column-third">
            <SpeechButton name="Standard speech" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
