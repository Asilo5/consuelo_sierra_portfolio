import React, { Component } from 'react';
import './App.scss';
import SVGPage from '../SVGPage/SVGPage';
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
// import Contact from '../Contact/Contact';
import About from '../About/About';
import NavBar from '../NavBar/NavBar';
// import { Route, Switch } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <main>
         <SVGPage />
         <section>
            <NavBar />
            <About />
            <ProjectsContainer />
         </section>
      </main>
    )
  }
}

export default App;
