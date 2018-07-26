import * as React from 'react';

export default function (props) {
  return (
    <div className='matches_presenter'>
      <div className="container">{props.renderMatches()}</div>
    </div>
)
}