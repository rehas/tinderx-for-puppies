import * as React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div className='matches_presenter'>
    <div>{props.renderMatches()}</div>
    <Link to={`/${props.currentUser}/selector`}>
      <button onClick={() =>{props.showNewProfile(props.currentUser,0,props.users)
      }}>
        Back    
  </button>
    </Link>
    </div>
)
}