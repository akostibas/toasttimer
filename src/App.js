import React, { Component } from 'react';
import headerImage from './images/header.jpeg';
import './App.css';
import SpeechButton from './speech_buttons/speechButton.js';
import Timer from './Timer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const SelectSpeech = () => (
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
        <SpeechButton name="Two minute special" seconds="120" />
      </div>
      <div className="column-third">
        <SpeechButton name="Table topic" seconds="120" />
      </div>
      <div className="column-third">
        <SpeechButton name="Standard speech" seconds="360" />
      </div>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SelectSpeech} />
          <Route path='/timer' component={Timer} />
        </div>
      </Router>
    );
  }
}

export default App;
