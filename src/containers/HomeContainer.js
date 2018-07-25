import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomePresenter from '../presenters/HomePresenter';
import { setCurrentUser } from '../actions/user-actions'

class HomeContainer extends PureComponent {

  handleEvent = (event, setCurrentUser) => {
    const id = event.target.elements["userId"].value;
    setCurrentUser(parseInt(id, 10));
  }

  render() {
    return (
      <HomePresenter 
        currentUser={this.props.currentUser} 
        setCurrentUser={this.props.setCurrentUser} 
        handleEvent={this.handleEvent} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { setCurrentUser })(HomeContainer)
