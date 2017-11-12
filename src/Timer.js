import React, { Component } from 'react';
import './Timer.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: Number(this.props.seconds),
      time: 0,
      timer: null
    }

    // In order for `this` to be defined in startCounting(), you have to bind it
    // like this. See: https://reactjs.org/docs/handling-events.html
    this.startCounting = this.startCounting.bind(this);
    this.stopCounting = this.stopCounting.bind(this);
  }

  componentWillUnmount() {
    this.stopCounting();
  }

  tick(self) {
    self.setState({
      time: self.state.time + 1
    });
  }

  startCounting() {
    // Capture `this` in a local variable to be used in the interval timer.
    var self = this;
    self.state.timer = setInterval(function() {
      self.tick(self)
    }, 1000);
  }

  stopCounting() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="TimerView">
        <div className="CountUp" onClick={ this.startCounting }>
          { this.state.time }
        </div>
      </div>
    );
  }
}

export default App;
