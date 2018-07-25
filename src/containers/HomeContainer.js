import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomePresenter from '../presenters/HomePresenter';
import { setCurrentUser } from '../actions/user-actions'

class HomeContainer extends PureComponent {
  render() {
    return (
      <HomePresenter 
        currentUser={this.props.currentUser} 
        setCurrentUser={this.props.setCurrentUser} 
        url={this.props.currentUser} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.Id
  }
}

export default connect(mapStateToProps, { setCurrentUser })(HomeContainer)
