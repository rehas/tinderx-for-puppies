import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';
import request from 'superagent'

import PictureContainer from './PictureContainer'
import ProfileBioContainer from './ProfileBioContainer'
import users from '../users/users-hardcoded'
import {setProfileUrl,setPictureForCurrentProfile} from '../actions/setProfileUrl'
import * as userActions from '../actions/user-actions'
import {swipeRight} from '../actions/user-actions'



class SelectorContainer extends React.PureComponent{

  componentDidMount(){
    console.log('were in selector container dismount')
    console.log(this.props);
    
    console.log(this.props.currentUser.Pic === null)


    if(this.props.currentUser.Pic === null ){
        //this.props.setPictureForCurrentProfile()

      }

  }

   onClickHandler = (event) => {
    console.log(event.target)
    if(event.target.id === 'no'){
      console.log('no')
      // console.log(id)
       this.props.swipeLeft(3)
    }else{
      console.log('yes')
      // console.log(this.props)

      this.props.swipeRight(3)
    }
  }

  render(){
  // console.log( this.props.currentUser && this.props.currentUser )
  // console.log(this.props)
    // console.log(this.state)
    // this.props.setCurrentUser(this.props.match && this.props.match.params.id)
    console.log(this.props.userActions)
    // this.props.userActions.swipeLeft(5);
    // this.props.swipeRight(5);

    
  
    return (
      <div className="selector-container">
        <p>I'm the gamePage container</p>
        <button className="selector-container-button-no" onClick={this.onClickHandler} id="no" val={3} >No</button>
        <PictureContainer user = { this.props.currentUser && this.props.currentUser} />
        <button className="selector-container-button-yes" onClick={this.onClickHandler} id="yes" val={3}>Yes</button>
        <ProfileBioContainer user = {this.props.currentUser &&this.props.currentUser} />
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

const mapDispatchToProps = {
    swipeLeft : userActions.swipeLeft,
    swipeRight : userActions.swipeRight,

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
