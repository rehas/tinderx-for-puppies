import * as React from 'react'
import request from 'superagent'
import {setProfileUrl} from '../actions/setProfileUrl'
import { connect } from 'react-redux';



class PhotoPageContainer extends React.PureComponent{

  render(){
    return (
      <div className="photo-page-container">
        <img className="selector-container-image" src={this.props.user.Pic} alt=""/>
      </div>
    )
  }
}

export default connect(null, {setProfileUrl})(PhotoPageContainer)
