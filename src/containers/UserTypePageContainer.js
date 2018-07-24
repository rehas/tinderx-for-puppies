import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import UserTypePresenter from '../presenters/UserTypePresenter';

class UserTypePresenterContainer extends PureComponent{
  render(){
    return(
    <UserTypePresenter filer_users={(userType)=>console.log(userType)}/>
    )
  }
}

export default connect()(UserTypePresenterContainer)