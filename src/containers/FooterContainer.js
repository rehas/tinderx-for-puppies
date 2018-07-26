import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../actions/user-actions'

class FooterContainer extends PureComponent{
  render(){

    const matchButtonClass = (this.props.location.pathname === '/' || this.props.location.pathname.includes('matches')) 
      ? 'd-none' : 'btn'
    const logoutButtonClass = (this.props.location.pathname === '/') ? 'd-none' : 'btn'
    const selectorButtonClass = (this.props.location.pathname === '/' || this.props.location.pathname.includes('selector') )
    ? 'd-none' : 'btn' ;
    
    return (
      <div className="card-footer page-footer"> 
      
      <Link to={ `/${this.props.currentUser}/matches` }><button className={matchButtonClass}>My matches</button></Link>
      <Link to={`/`}><button className={logoutButtonClass} onClick={() => this.props.logOut()}>logout</button></Link>
      <Link to={`/${this.props.currentUser}/selector`}><button className={selectorButtonClass}>Show Me Profiles</button></Link>
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
