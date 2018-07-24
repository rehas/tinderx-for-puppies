import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';
import request from 'superagent'

import PictureContainer from './PictureContainer'
import UserBioContainer from './UserBioContainer'
import users from '../users/users-hardcoded'
import {setCurrentUser} from '../actions/user-actions'
import {setProfileUrl,setPictureForCurrentProfile} from '../actions/setProfileUrl'




class SelectorContainer extends React.PureComponent{

  componentDidMount(){
    console.log('were in selector container dismount')
    console.log(this.props);
    
    console.log(this.props.currentUser.Pic === null)

    if(this.props.currentUser.Pic === null ){
        this.props.setPictureForCurrentProfile()
      }
  }

  render(){
  // console.log( this.props.currentUser && this.props.currentUser )
  // console.log(this.props)
    // console.log(this.state)
    // this.props.setCurrentUser(this.props.match && this.props.match.params.id)
  
  
    return (
      <div className="selector-container">
        <p>I'm the gamePage container</p>
        <button className="selector-container-button-no">No</button>
        <PictureContainer user = { this.props.currentUser && this.props.currentUser} />
        <button className="selector-container-button-yes">Yes</button>
        <UserBioContainer user = {this.props.currentUser &&this.props.currentUser} />
      </div>
    )
  }
}

const mapStateToProps =  (state) =>{
  return {
  users : state.users,
  currentUser : state.currentUser
  }
}

export default connect(mapStateToProps, {setCurrentUser, setProfileUrl,setPictureForCurrentProfile})(SelectorContainer)
