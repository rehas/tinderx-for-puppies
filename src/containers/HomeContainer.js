import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import HomePresenter from '../presenters/HomePresenter'
import { setCurrentUser, getStateFromBrowser } from '../actions/user-actions'
import {showNewProfile} from '../actions/profile-actions'


class HomeContainer extends PureComponent {

  state = { 
    userEmail: '', 
    userPassword: '',
  }

  componentDidMount(){
    this.props.getStateFromBrowser()
  }

  handleEvent = () => {
    const validateEmail = this.props.users.filter(user => user.Email === this.state.userEmail)
    const validatePassword = this.props.users.filter(user => user.Password === this.state.userPassword)
    if (validateEmail.length === 1 && validatePassword.length === 1) {

      this.props.setCurrentUser(parseInt(validateEmail[0].Id, 10));
      this.props.showNewProfile(parseInt(validateEmail[0].Id, 10), 0, this.props.users)
      this.props.history.push(`/${parseInt(validateEmail[0].Id, 10)}/selector`)
      }
    else {
      console.log("error")
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
        handleChange={this.handleChange} />
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