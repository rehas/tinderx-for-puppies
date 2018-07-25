import * as React from 'react'

export default class ProfileBioContainer extends React.PureComponent{
  render(){
    // console.log(this.props)
    return (
      <div className="user-bio-container text-justify p-4 border border-secondary rounded h-40 d-inline-block">
        <p> User Bio {this.props.user && this.props.user.Bio} </p>
      </div>
    )
  }
}