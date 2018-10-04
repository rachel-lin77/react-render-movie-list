import React, { Component } from 'react';

import './App.css';
import {GetMovies} from './app/action/GetMovies';
import MovieGrid from './app/components/Grid/Container/MovieGrid';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movie Budget</h1>
          <h6 className="App-intro">we will find the lowest price for you</h6>
        </header>
        <MovieGrid />
      </div>

    );
  }
}

export default App;
