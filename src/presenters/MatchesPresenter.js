import * as React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div className='matches_presenter'>
    <div>{props.renderMatches()}</div>
    <Link to={`/${props.currentUserId}/selector`}>
      <button>
        Back    
  </button>
    </Link>
    </div>
)
}