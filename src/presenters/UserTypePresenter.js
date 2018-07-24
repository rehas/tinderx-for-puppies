import * as React from 'react';
import {Link} from 'react-router-dom';

export default function UserTypePage(props){
  return(
    <div className='user-type-page'>
      <h1>Are you a dog or a walker?</h1>
      <div className='user-type-page-dog'>
        <Link to={`/:userId/selector`} onClick={()=>{props.filer_users('dog')}}>Dog</Link>
      </div>
      <div className='user-type-page-walker'>
        <Link to={`/:userId/selector`} onClick={()=>{props.filer_users('walker')}}>Walker</Link>
      </div>
    </div>
  )
}

