import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CreateUserPresenter from '../presenters/CreateUserPresenter';
import {createNewProfile} from '../actions/profile-actions'
import {setCurrentUser} from '../actions/user-actions'

class CreateUserContainer extends PureComponent{
  
  handleSubmit = (e)=>{
    e.preventDefault()
    
    const Id    = this.props.users.length +1
    const Email  = e.target.email.value
    const Password = e.target.password.value
    const Name   = e.target.username.value
    const Type   = e.target.Dog.checked ? "Dog" : "Walker"
    const Pic    = e.target.Pic.value
    const Bio    = e.target.Bio.value
    const Phone    = e.target.phone.value
    
    const newUser = {
      Id, 
      Email,
      Password,
      Name ,
      Type ,
      Pic,
      Bio,
      Yes : [],
      No : [],
      Phone
    }

    this.props.createNewProfile(newUser)
    this.props.setCurrentUser(Id);
    this.props.history.push(`/${Id}/selector`)

  }
  
  render(){
    return(
      <CreateUserPresenter 
      onSubmitHandler = {this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {
  createNewProfile : createNewProfile,
  setCurrentUser :setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer)