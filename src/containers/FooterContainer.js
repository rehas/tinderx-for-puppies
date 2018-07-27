import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/user-actions'

class FooterContainer extends PureComponent{
  render() {

    const path = this.props.location.pathname

    const matchButtonClass = (path === '/' || path.includes('matches') || path.includes('new-user')) 
      ? 'd-none' : 'btn btn-primary'
    const logoutButtonClass = (path === '/' || path.includes('new-user')) ? 'd-none' : 'btn btn-primary'
    const selectorButtonClass = (path === '/' || path.includes('selector') || path.includes('new-user') )
    ? 'd-none' : 'btn btn-primary' ;

    const createProfileButtonClass = (path === '/') ? 'btn btn-primary' : 'd-none'
    
    return (
      <div className="card-footer page-footer"> 
      <Link to={ `/${this.props.currentUser}/matches` }><button className={matchButtonClass}>My matches</button></Link>
      <Link to={`/${this.props.currentUser}/selector`}><button className={selectorButtonClass}>Profiles</button></Link>
      <Link to={`/`}><button className={logoutButtonClass} onClick={() => this.props.logOut()}>logout</button></Link>
      <Link to={ `/new-user` }><button className={createProfileButtonClass}>Sign Up</button></Link>
      </div>
    )
  }
}

const mapsStateToProps = (state) =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapsStateToProps, {logOut})(FooterContainer)
