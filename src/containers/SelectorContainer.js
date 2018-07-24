import * as React from 'react'
import { connect } from 'react-redux';

import PictureContainer from './PictureContainer'
import ProfileBioContainer from './ProfileBioContainer'
import * as userActions from '../actions/user-actions'
import {showNewProfile} from '../actions/profile-actions'

class SelectorContainer extends React.PureComponent{

  componentDidMount(){
    if(this.props.currentUser.Pic === null ){
      }

  }

   onClickHandler = (event) => {
    if(event.target.id === 'no'){
       this.props.swipeLeft(this.props.shownProfileId)
       this.props.showNewProfile(this.props.currentUser.Id, this.props.shownProfileId)

    }else{
      this.props.swipeRight(this.props.shownProfileId)
      this.props.showNewProfile(this.props.currentUser.Id, this.props.shownProfileId)
    }
  }

  render(){
    return (
      <div className="selector-container">
        <p>I'm the gamePage container</p>
        <button className="selector-container-button-no" onClick={this.onClickHandler} id="no"  >No</button>
        <PictureContainer user = { this.props.currentUser && this.props.currentUser} />
        <button className="selector-container-button-yes" onClick={this.onClickHandler} id="yes" >Yes</button>
        <ProfileBioContainer user = {this.props.currentUser &&this.props.currentUser} />
      </div>
    )
  }
}

const mapStateToProps =  (state) =>{
  return {
  users : state.users,
  currentUser : state.currentUser,
  shownProfileId : state.shownProfile
  }
}

const mapDispatchToProps = {
    swipeLeft : userActions.swipeLeft,
    swipeRight : userActions.swipeRight,
    showNewProfile : showNewProfile

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
