import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MatchesPresenter from '../presenters/MatchesPresenter'
import { setMatches } from '../actions/setMatches'
import { getCurrentUser, getStateFromBrowser } from '../actions/user-actions'
import { showNewProfile } from '../actions/profile-actions'


class MatchesContainer extends PureComponent {

  renderMatches = () => {
    if(this.props.matches.length === 0){
      return (
        <div className="selector_presenter matches-box">
        <div>
          <img className="selector-container-image img-fluid" src={require('../puppylove.jpg')} alt="no more"/>
          <h4>You don't have any matches yet, keep looking</h4>
        </div>
        </div>
      )
    }
    return this.props.matches.map((match) => { 
      return (
      <div key={match.Id} className='col-md-10 matches_container_matches photo-page-container h-25 d-inline-block'>
      <h4 className="matches-name">{match.Name}</h4>
      {/* <a href={`mailto:${match.Email}`}>
      <div className="matches-email">{ match.Email}</div>
      </a> */}
      <a href={`https://api.whatsapp.com/send?phone=${match.Phone}`}>
      <div className="matches-phone">{ match.Phone}</div>
      </a>
      <img className="matches_container_matches-image img-fluid selector-container-image" src={match.Pic} alt={match.Name}/>
      <div className="user-bio-container text-justify border border-secondary rounded h-40 d-inline-block">
      <p>{match.Bio}</p>
      </div>
      </div>)
    })
  }

  componentWillMount() {
    this.props.currentUserId === null && (this.props.history.push(`/`))
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div className="selector-container">
      <div className="row justify-content-center">
      {this.props.matches.lentgh ===0 && <div className="col-md-1"></div>}
      <div className="col-md-10">
      <MatchesPresenter 
        currentUserId={this.currentUserId} 
        renderMatches={this.renderMatches} 
        showNewProfile={this.props.showNewProfile}
        currentUser={this.props.currentUserId}
        users={this.props.users}/>      </div>
      </div>
      {this.props.matches.lentgh ===0 && <div className="col-md-1"></div>}
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
