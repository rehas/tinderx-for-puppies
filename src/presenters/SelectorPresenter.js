import React from 'react';
import { Link } from 'react-router-dom';

export default function SelectorPresenter(props) {
  return (
    <div className='selector_presenter'>
      <Link to={ `/${props.currentUser}/matches` }><button>My matches</button></Link>
      <div>
        <h3>No more profiles to review right now</h3>
      </div>
    </div>
)
}