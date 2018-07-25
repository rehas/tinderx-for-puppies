import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CreateUserPresenter from '../presenters/CreateUserPresenter';

class CreateUserContainer extends PureComponent{
  render(){
    return(
    <CreateUserPresenter />
    )
  }
}

export default connect()(CreateUserContainer)