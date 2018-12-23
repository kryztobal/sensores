import React, { Component } from 'react';
import './App.css';
import Chart from './chart'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Chart/>
        <Chart/>
        <Chart/>
        <Chart/>
      </div>
    );
  }
}

export default App;
