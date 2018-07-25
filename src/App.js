import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import SelectorContainer from './containers/SelectorContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import HomeContainer from './containers/HomeContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route exact path = '/:id/selector' component ={SelectorContainer}  />
          <Route exact path = '/new-user' component ={CreateUserContainer}  />
          <Route exact path = '/' component ={HomeContainer}  />
        </main>
      </div>
    );
  }
}

export default App;
