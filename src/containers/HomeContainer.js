import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomePresenter from '../presenters/HomePresenter';
import { setCurrentUser } from '../actions/user-actions'

class HomeContainer extends PureComponent {
  render() {
    return (
      <HomePresenter userId={this.props.userId} setCurrentUser={this.props.setCurrentUser} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    userId: state.currentUser.Id
  }
}

export default connect(mapStateToProps, { setCurrentUser })(HomeContainer)