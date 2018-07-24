import * as React from 'react'
import request from 'superagent'


export default class PhotoPageContainer extends React.PureComponent{

  componentDidMount(){

    if(this.props.user.userPic === null ){
      request('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          // we need some dispatcher function!
          console.log(response.body)
        })
      }

      // this.props.user.userpic = 
        
    }

  


  render(){
    return (
      <div className="photo-page-container">
        <img className="selector-container-image" src={this.props.user.userPic} alt=""/>
      </div>
    )
  }
}