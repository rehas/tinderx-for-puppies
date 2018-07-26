<<<<<<< HEAD
import {SELECT_USER} from '../actions/user-actions'
=======
import {SELECT_USER, LOGOUT_USER} from '../actions/user-actions'
>>>>>>> c5d7cba7fb3e7151a68a9d8355aa605ddc77261a

const initialState = null

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      return action.payload
    case LOGOUT_USER:
      return initialState
    default:
      return state 
  }
}
