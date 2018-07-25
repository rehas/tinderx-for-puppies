import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import SelectorContainer from './containers/SelectorContainer';
import UserTypeContainer from './containers/UserTypeContainer';
import HomeContainer from './containers/HomeContainer';
import MatchesContainer from './containers/MatchesContainer'


class App extends Component {
  render() {
    return (
      <div className="App container h-100" id="main-container" >
        <div className="row">
          <div className="col-md-1 app-left-column" id="app-left-column"></div>
          <div className="col-md-10 h-100 d-inline-block">
<<<<<<< HEAD
            <header className="App-header text-success">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Tinder For Puppies</h1>
            </header>
            <main>
              <Route exact path='/' component={HomeContainer} />
              <Route exact path='/:id/matches' component={MatchesContainer} />
              <Route exact path='/:id/selector' component={SelectorContainer} />
              <Route exact path='/user-types' component={UserTypeContainer} />

            </main>
          </div>
          <div className="col-md-1 app-left-column" id="app-left-column"></div>
=======
        <header className="App-header text-success">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tinder For Puppies</h1>
        </header>
        <main>
          <Route exact path = '/:id/selector' component ={SelectorContainer}  />
          <Route exact path = '/user-types' component ={UserTypeContainer}  />
          <Route exact path = '/' component ={HomeContainer}  />
          
        </main>
        </div>
        <div className="col-md-1 app-left-column" id="app-left-column"></div>
>>>>>>> be947ec3f9287db2658efc53f36fbc2025e1f393

        </div>
      </div>
    );
  }
}

export default App;
