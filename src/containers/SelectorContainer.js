import * as React from 'react'
import store from '../store'
import { connect } from 'react-redux';

export default class SelectorContainer extends React.PureComponent{
  render(){
    return (
      <div className="game-page-container">
        <p>I'm the gamePage container</p>
      </div>
    )
  }
}