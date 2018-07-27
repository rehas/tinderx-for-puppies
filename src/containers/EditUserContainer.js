import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import EditUserPresenter from '../presenters/EditUserPresenter';
import {createNewProfile, UpdateProfile} from '../actions/profile-actions'
import {setCurrentUser} from '../actions/user-actions'

class EditUserContainer extends PureComponent{
  currentUser = this.props.users.filter(x=>x.Id === this.props.currentUserId)[0];
   
  
  handleSubmit = (e)=>{
    e.preventDefault()

    
    const Id    = this.props.currentUserId
    const Email  = e.target.email.value
    // const Password = e.target.password.value
    const Name   = e.target.username.value
    const Type   = e.target.Dog.checked ? "Dog" : "Walker"
    const Pic    = e.target.Pic.value
    const Bio    = e.target.Bio.value
    const Phone    = e.target.phone.value
    
    const newUser = {
      Id: this.currentUser.Id,
      Email,
      Password : this.currentUser.Password,
      Name ,
      Type ,
      Pic,
      Bio,
      Yes : this.currentUser.Yes.concat([]),
      No : this.currentUser.No.concat([]),
      Phone
    }

    this.props.UpdateProfile(newUser)
    this.props.setCurrentUser(Id);
    // this.props.history.push(`/${Id}/selector`)

  }
  componentWillMount(){
    this.props.currentUserId === null && this.props.history.push(`/`)
  }
  
  render(){
    if (this.props.currentUserId === null) { this.props.history.push(`/`) 
    return null}
    return(
      <EditUserPresenter 
      onSubmitHandler = {this.handleSubmit}
      currentUserObject = {this.currentUser}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUserId : state.currentUser
  }
}

const mapDispatchToProps = {
  createNewProfile : createNewProfile,
  UpdateProfile : UpdateProfile,
  setCurrentUser :setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserContainer)