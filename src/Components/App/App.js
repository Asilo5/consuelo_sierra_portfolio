import React, { Component } from 'react';
import './App.scss';
import SVGPage from '../SVGPage/SVGPage';
import NavBar from '../NavBar/NavBar';

class App extends Component {
  
  render() {
    return (
      <main>
        <NavBar />
        <SVGPage />

      </main>
    )
  }
}

export default App;
