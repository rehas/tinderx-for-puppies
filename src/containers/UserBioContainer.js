import * as React from 'react'

export default class UserBioContainer extends React.PureComponent{
  render(){
    return (
      <div className="user-bio-container">
        <p> User Bio {this.props.user.Bio} </p>
      </div>
    )
  }
}