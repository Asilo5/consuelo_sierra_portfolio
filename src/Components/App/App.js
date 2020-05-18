import React, { Component } from 'react';
import './App.scss';

import SVGPage from '../SVGPage/SVGPage';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import NavBar from '../NavBar/NavBar';

import { Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

class App extends Component {
  
  render() {
    const pageTransitions = {
      in: {
        opacity: 1,
      },

      out: {
        opacity: 0
      }
    };

    return (
      <main>
         <NavBar />
         <AnimatePresence>
            <Route exact path='/' render={() => <SVGPage pageTransitions={pageTransitions} /> } />
            <Route exact path='/projects' render={() => <ProjectsContainer pageTransitions={pageTransitions} /> }/>
            {/* <Route exact path='/resume' render={() => <Resume pageTransitions={pageTransitions} /> }/> */}
         </AnimatePresence>
      </main>
    )
  }
}

export default App;
