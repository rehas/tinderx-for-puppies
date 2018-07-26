import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import MatchesPresenter from '../presenters/MatchesPresenter';
import { setMatches } from '../actions/setMatches'
import { getCurrentUser, getStateFromBrowser } from '../actions/user-actions'
import {showNewProfile} from '../actions/profile-actions'


class MatchesContainer extends PureComponent {

  componentDidMount() {
    this.props.currentUserId !== null && this.props.setMatches(this.props.currentUserId, this.props.users)
  }

  renderMatches = () => {
    if(this.props.matches.length === 0){
      return (
        <div className="selector_presenter">
        <div>
          <img className="selector-container-image img-fluid" src={require('../puppylove.jpg')} alt="no more"/>
          <h4>You don't have any matches yet, keep looking</h4>
        </div>
        </div>
      )
    }
    return this.props.matches.map((match)=> {
    return <div key={match.Id} className='col-md-8 matches_container_matches photo-page-container h-25 d-inline-block'>
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
      </div>})
  }

  componentWillMount() {
    this.props.getCurrentUser() === null && (this.props.history.push(`/`))
  }

  render(){
    return(
      <div className="selector-container">
      <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <MatchesPresenter 
        currentUserId={this.currentUserId} 
        renderMatches={this.renderMatches} 
        showNewProfile={this.props.showNewProfile}
        currentUser={this.props.currentUserId}
        users={this.props.users}/>      </div>
      </div>
      <div className="col-md-2"></div>
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