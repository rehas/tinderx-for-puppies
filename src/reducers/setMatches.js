import { SET_MATCHES } from '../actions/setMatches'


export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_MATCHES:
      return state.concat(['yay'])

    default:
      return state
  }
}