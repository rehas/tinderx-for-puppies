import * as React from 'react'

export default class ProfileBioContainer extends React.PureComponent{
  render(){
    return (
      <div className="user-bio-container">
        <p> User Bio {this.props.user && this.props.user.Bio} </p>
      </div>
    )
  }
}