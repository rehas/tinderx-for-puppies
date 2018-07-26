import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logOut } from '../actions/user-actions'

class FooterContainer extends PureComponent{
  render(){
    console.log("footerContainer")
    console.log(this.props.location.pathname)
    console.log(this.props.location.pathname === '/')

    const matchButtonClass = (this.props.location.pathname === '/' || this.props.location.pathname.includes('matches')) 
      ? 'd-none' : ''
    return (
      <div className="card-footer page-footer"> 
      I'm the footer
      <Link to={ `/${this.props.currentUser}/matches` }><button className={matchButtonClass}>My matches</button></Link>
      <Link to={`/`}><button onClick={() => this.props.logOut()}>logout</button></Link>
      </div>
    )
  }
}

export default connect(null, {logOut})(FooterContainer)