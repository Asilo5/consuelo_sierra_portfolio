import React, { Component } from 'react';
import './App.scss';
import SVGPage from '../SVGPage/SVGPage';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import NavBar from '../NavBar/NavBar';
import { Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <main>
         <NavBar />
         <Route exact path='/' render={() => <SVGPage /> } />
         <Route path='/projects' render={() => <ProjectsContainer /> }/>
         {/* <Route path='/resume' render={() => <Resume /> }/> */}
      </main>
    )
  }
}

export default App;
