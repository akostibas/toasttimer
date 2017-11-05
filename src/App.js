import React, { Component } from 'react';
import headerImage from './images/header.jpeg';
import './App.css';

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
      </div>
    );
  }
}

export default App;
