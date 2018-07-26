import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MatchesPresenter from '../presenters/MatchesPresenter'
import { setMatches } from '../actions/setMatches'
import { getCurrentUser, getStateFromBrowser } from '../actions/user-actions'
import { showNewProfile } from '../actions/profile-actions'


class MatchesContainer extends PureComponent {

  renderMatches = () => {
    return this.props.matches.map((match) => { return(
      <div key={match.Id} className='col-md-8 matches_container_matches photo-page-container h-25 d-inline-block'>
      <h3>{match.Name}</h3>
      <a href={`mailto:${match.Email}`}>
      <p>{ match.Email}</p>
      </a>
      <a href={`https://wa.me/${match.Phone}`}>
      <p>{ match.Phone}</p>
      </a>
      <img className="matches_container_matches-image img-fluid selector-container-image" src={match.Pic} alt={match.Name}/>
      <div className="user-bio-container text-justify border border-secondary rounded h-40 d-inline-block">
      <p>{match.Bio}</p>
      </div>
      </div>
    )})
  }

  componentWillMount() {
    this.props.getCurrentUser() === null && (this.props.history.push(`/`))
  }

  componentDidMount() {
    
  }

  render(){
    return(
      <div className="selector-container">
        <div className="row">
        <MatchesPresenter 
          currentUserId={this.currentUserId} 
          renderMatches={this.renderMatches} 
          showNewProfile={this.props.showNewProfile}
          currentUser={this.props.currentUserId}
          users={this.props.users}/>      
        </div>
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

export default connect(mapStateToProps, { setMatches, getCurrentUser, getStateFromBrowser, showNewProfile })(MatchesContainer)
