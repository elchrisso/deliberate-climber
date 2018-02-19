import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import SeasonAdd from './seasons/SeasonAdd'
import SeasonsList from './seasons/SeasonsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SeasonsList}/>
          <Route path="/seasons" component={SeasonsList} />
          <Route path="/addseason" component={SeasonAdd} />
        </Switch>
      </div>
    );
  }
}

export default App;
