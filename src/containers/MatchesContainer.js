import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import MatchesPresenter from '../presenters/MatchesPresenter';
import {setMatches} from '../actions/setMatches'

class MatchesContainer extends PureComponent{
  
  
  render(){
    this.props.setMatches(this.props.currentUserId, this.props.users)
    return(
      <MatchesPresenter/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser,
    users: state.users
  }
}

export default connect(mapStateToProps, {setMatches})(MatchesContainer)