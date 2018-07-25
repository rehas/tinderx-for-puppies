import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import MatchesPresenter from '../presenters/MatchesPresenter';
import {setMatches} from '../actions/setMatches'
import matches from '../reducers/matches';

class MatchesContainer extends PureComponent{
  
  componentDidMount(){
  this.props.setMatches(this.props.currentUserId, this.props.users)}

  renderMatches = () => {
    return this.props.matches.map((match)=> {
    return <div className='matches_container_matches'>
      <h3>{match.Name}</h3>
      <p>{match.Email}</p>
      <img className="matches_container_matches-image" src={match.Pic} alt={match.Name}/>
      </div>})
  }

  render(){
    return(
      <div>
      <MatchesPresenter renderMatches={this.renderMatches}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser,
    users: state.users,
    matches: state.matches
  }
}

export default connect(mapStateToProps, {setMatches})(MatchesContainer)