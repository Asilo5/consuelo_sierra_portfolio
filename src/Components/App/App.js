import React, { Component } from 'react';
import './App.scss';
import SVGPage from '../SVGPage/SVGPage';
// import ProjectsContainer from '../ProjectsContainer';
// import Contact from '../Contact/Contact';
import About from '../About/About';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <SVGPage /> } />
          <Route exact path='/about' render={() => <About /> } />
          {/* <Route exact path='/projects' render={() => <ProjectsContainer /> } /> */}
          {/* <Route exact path='/contact' render={() => <Contact /> } /> */}
        </Switch>
      </main>
    )
  }
}

export default App;
