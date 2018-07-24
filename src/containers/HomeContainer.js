import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import HomePage from '../presenters/HomePage';

class HomePageContainer extends PureComponent{
  render(){
    return(
    <HomePage userId={this.props.userId} filer_users={(userType)=>console.log(userType)}/>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    userId: state.currentUser.Id
  }
}

export default connect(mapStateToProps)(HomePageContainer)