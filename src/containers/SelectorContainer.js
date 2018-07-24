import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';
import PictureContainer from './PictureContainer'
import UserBioContainer from './UserBioContainer'



export default class SelectorContainer extends React.PureComponent{
  render(){
    return (
      <div className="selector-container">
        <p>I'm the gamePage container</p>
        <button className="selector-container-button-no">No</button>
        <PictureContainer />
        <button className="selector-container-button-yes">Yes</button>
        <UserBioContainer />
      </div>
    )
  }
}