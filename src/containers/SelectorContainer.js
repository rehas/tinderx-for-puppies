import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';
import PictureContainer from './PictureContainer'
import UserBioContainer from './UserBioContainer'
import {users} from '../users/users-hardcoded'



export default class SelectorContainer extends React.PureComponent{

  state =  { 
    user : users[Math.floor(Math.random()*users.length -1)]
  }

  render(){
    console.log(this.state.user)
    return (
      <div className="selector-container">
        <p>I'm the gamePage container</p>
        <button className="selector-container-button-no">No</button>
        <PictureContainer user = {this.state.user} />
        <button className="selector-container-button-yes">Yes</button>
        <UserBioContainer user = {this.state.user} />
      </div>
    )
  }
}