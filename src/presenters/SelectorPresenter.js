import React from 'react';

export default function SelectorPresenter(props) {
  return (
    <div className='selector_presenter'>
      <div>
        <img className="selector-container-image img-fluid" src={require('../sadPuppy.jpg')} alt="no more"/>
        <h4>No more profiles to review right now</h4>
      </div>
    </div>
)
}