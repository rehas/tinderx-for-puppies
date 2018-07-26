import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import SelectorContainer from './containers/SelectorContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import HomeContainer from './containers/HomeContainer';
import MatchesContainer from './containers/MatchesContainer'
import FooterContainer from './containers/FooterContainer'


class App extends Component {
  
  
  render() {
    // const User = ({ match }) => {
    //   console.log(match)
    // }
    // console.log(this.props.location)
    // User()
    return (
      <div className="App container-fluid" id="main-container" >
        <div className="row">
          <div className="col-md-1 app-left-column" id="app-left-column"></div>
          <div className="col-md-10 h-100 d-inline-block">
            <header className="App-header text-success">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Tinder For Puppies</h1>
            </header>
            <div id="app-main-div" className="container-fluid">
              <Route exact path='/' component={HomeContainer} />
              <Route exact path='/:id/matches' component={MatchesContainer} />
              <Route exact path='/:id/selector' component={SelectorContainer} />
              <Route exact path = '/new-user' component ={CreateUserContainer}  />
             <Route component={(props) => <FooterContainer {...props} extra={"hello"} />}/>
              {/* <FooterContainer isHomePage={null}/> */}
            </div >
          </div>
          <div className="col-md-1 app-left-column" id="app-left-column"></div>

        </div>
      </div>
    );
  }
}

export default App;
