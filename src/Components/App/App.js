import React, { Component } from 'react';
import './App.scss';
import SVGPage from '../SVGPage/SVGPage';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <SVGPage /> } />
        </Switch>

      </main>
    )
  }
}

export default App;
