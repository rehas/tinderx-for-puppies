import * as React from 'react'

export default class PhotoPageContainer extends React.PureComponent{
  render(){
    return (
      <div className="photo-page-container">
        <img className="selector-container-image" src="https://images.dog.ceo/breeds/malamute/n02110063_11052.jpg" alt=""/>
      </div>
    )
  }
}