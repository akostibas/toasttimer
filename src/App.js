import React, { Component } from 'react';
import headerImage from './images/header.jpeg';
import './App.css';
import SpeechButton from './speech_buttons/speechButton.js';
import Timer from './Timer.js';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
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
        <Link to={{
          pathname: "/timer/",
          state: { seconds: 120 } }}>
          <SpeechButton name="Two minute special" />
        </Link>
      </div>
      <div className="column-third">
        <Link to={{
          pathname: "/timer/",
          state: { seconds: 120 } }}>
          <SpeechButton name="Table topic" />
        </Link>
      </div>
      <div className="column-third">
        <Link to={{
          pathname: "/timer/",
          state: { seconds: 360 } }}>
          <SpeechButton name="Standard speech" />
        </Link>
      </div>
    </div>
  </div>
)

const NoMatch = () => (
  <Redirect to="/" />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Use <Switch> since we only ever want to render one of the
           * matching routes.
           * https://reacttraining.com/react-router/web/api/Switch
           */}
          <Switch>
            <Route exact path='/' component={SelectSpeech} />
            <Route exact path='/timer/' component={Timer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
