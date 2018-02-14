import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SeasonAdd } from './seasons/SeasonAdd'
import SeasonsList from './seasons/SeasonsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SeasonAdd/>
        <SeasonsList/>
      </div>
    );
  }
}

export default App;
