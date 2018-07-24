import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserTypePresenter from '../presenters/UserTypePresenter';

class UserTypeContainer extends PureComponent {
  render() {
    return (
      <UserTypePresenter userId={this.props.userId} filer_users={(userType) => console.log(userType)} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.currentUser.Id
  }
}

export default connect(mapStateToProps)(UserTypeContainer)