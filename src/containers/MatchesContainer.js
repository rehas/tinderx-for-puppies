import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import MatchesPresenter from '../presenters/MatchesPresenter';
import {setMatches} from '../actions/setMatches'

class MatchesContainer extends PureComponent{
  
  
  render(){
    this.props.setMatches()
    return(
      <MatchesPresenter/>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    userId: state.currentUser.Id
  }
}

export default connect(mapStateToProps, {setMatches})(MatchesContainer)