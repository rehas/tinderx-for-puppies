import React from 'react'

export default function SelectorPresenter() {
  return (
    <div className='selector_presenter'>
      <div>
        <img className="selector-container-image img-fluid" src={require('../sadPuppy.jpg')} alt="no more"/>
        <h3>No more profiles to review right now</h3>
      </div>
    </div>
  )
}