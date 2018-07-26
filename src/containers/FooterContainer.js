import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';


export default class FooterContainer extends PureComponent{
  render(){
    return (
      <div className="card-footer page-footer"> 
      I'm the footer
      <Link to={ `/${this.props.currentUser}/matches` }><button>My matches</button></Link>
      
      </div>
    )
  }
}