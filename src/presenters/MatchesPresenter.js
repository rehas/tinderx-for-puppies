import * as React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
  // console.log(props.matches)
  return (
    <div className='matches_presenter'>
    <div>{props.renderMatches()}</div>
    <Link to={`/${props.currentUser}/selector`}>
      <button>
        Back    
  </button>
    </Link>
    </div>
)
}