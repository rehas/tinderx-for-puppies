import { SELECT_USER, LOGOUT_USER, GET_USER } from '../actions/user-actions'

const initialState = ()=>{
  if(parseInt(localStorage.getItem('currentUser')) === 'null'){
    return null
  } else {
    return parseInt(localStorage.getItem('currentUser'))
  }
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      localStorage.setItem('currentUser', JSON.stringify(action.payload))
      return action.payload
    case GET_USER:
      return parseInt(localStorage.getItem('currentUser'))
    case LOGOUT_USER:
      localStorage.setItem('currentUser', JSON.stringify(initialState))
      return initialState
    default:
      return state
  }
}
