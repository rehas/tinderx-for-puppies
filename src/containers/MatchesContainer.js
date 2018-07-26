import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import MatchesPresenter from '../presenters/MatchesPresenter';
import {setMatches} from '../actions/setMatches'

class MatchesContainer extends PureComponent{
  
  componentDidMount(){
    this.props.currentUserId !== null && this.props.setMatches(this.props.currentUserId, this.props.users)
  }

  renderMatches = () => {
    return this.props.matches.map((match)=> {
    return <div key={match.Id} className='matches_container_matches'>
      <h3>{match.Name}</h3>
      <p>{match.Email}</p>
      <img className="matches_container_matches-image" src={match.Pic} alt={match.Name}/>
      <p>{match.Bio}</p>
      </div>})
  }

  componentWillMount(){
    this.props.currentUserId === null && (this.props.history.push(`/`))
  }

  render(){
    return(
      <div>
      <MatchesPresenter currentUserId={this.currentUserId} renderMatches={this.renderMatches}/>
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