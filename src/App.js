import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './header/Header'
import SeasonAdd from './seasons/SeasonAdd'
import SeasonsList from './seasons/SeasonsList'
import SeasonDetails from './seasons/SeasonDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Header classNAme="App-header"/>
        <div className="App">
          <Switch>

            <Route exact path="/" component={SeasonsList}/>

            <Route exact path="/seasons/details/:id" component={SeasonDetails} />
            <Route exact path="/seasons/add" component={SeasonAdd} />
            <Route path="/seasons" component={SeasonsList} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
