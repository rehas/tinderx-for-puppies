import * as React from 'react'

export default class UserBioContainer extends React.PureComponent{
  render(){
    console.log(this.props.user)
    return (
      <div className="user-bio-container">
        <p> User Bio {this.props.user.Bio} </p>
      </div>
    )
  }
}