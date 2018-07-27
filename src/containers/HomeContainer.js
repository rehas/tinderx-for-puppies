import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import HomePresenter from '../presenters/HomePresenter'
import { setCurrentUser, getStateFromBrowser } from '../actions/user-actions'
import { showNewProfile } from '../actions/profile-actions'
import createNotifications from './NotificationContainer'

class HomeContainer extends PureComponent {

  state = { 
    userEmail: '', 
    userPassword: '',
  }

  handleEvent = (e) => {
    e.preventDefault()
    const validateEmail = this.props.users.filter(user => user.Email === this.state.userEmail)
    const validatePassword = validateEmail.filter(user => user.Password === this.state.userPassword)
    if (validateEmail.length === 1 && validatePassword.length === 1) {
      this.props.setCurrentUser(parseInt(validateEmail[0].Id, 10));
      this.props.history.push(`/${parseInt(validateEmail[0].Id, 10)}/selector`)
      }
    else {
      createNotifications('failedLogin')
    }
  }
  
  handleChange  = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  render() {
    return (
      <HomePresenter 
        currentUser={this.props.currentUser} 
        handleEvent={this.handleEvent}
        handleChange={this.handleChange} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    users: state.users
  }
}

export default connect(mapStateToProps, { setCurrentUser, getStateFromBrowser, showNewProfile })(HomeContainer)
