import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import SelectorContainer from './containers/SelectorContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import HomeContainer from './containers/HomeContainer';
import MatchesContainer from './containers/MatchesContainer'


class App extends Component {
  render() {
    return (
      <div className="App container h-100" id="main-container" >
        <div className="row">
          <div className="col-md-1 app-left-column" id="app-left-column"></div>
          <div className="col-md-10 h-100 d-inline-block">
            <header className="App-header text-success">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Tinder For Puppies</h1>
            </header>
            <main>
              <Route exact path='/' component={HomeContainer} />
              <Route exact path='/:id/matches' component={MatchesContainer} />
              <Route exact path='/:id/selector' component={SelectorContainer} />
              <Route exact path = '/new-user' component ={CreateUserContainer}  />

            </main>
          </div>
          <div className="col-md-1 app-left-column" id="app-left-column"></div>

        </div>
      </div>
    );
  }
}

export default App;
