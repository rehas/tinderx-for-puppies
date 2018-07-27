import { SELECT_USER, LOGOUT_USER, GET_USER } from '../actions/user-actions'

const initialState = parseInt(localStorage.getItem('currentUser'),10) || null
  


export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      localStorage.setItem('currentUser', JSON.stringify(action.payload))
      return action.payload
    case GET_USER:
      return parseInt(localStorage.getItem('currentUser'),10)
    case LOGOUT_USER:
      localStorage.setItem('currentUser', JSON.stringify(initialState))
      return null
    default:
      return state
  }
}
