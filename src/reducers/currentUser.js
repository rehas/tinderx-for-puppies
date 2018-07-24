import users from '../users/users-hardcoded'
import {SELECT_USER, YES_PLEASE, NO_THANKS, } from '../actions/user-actions'

const initialState = users[0]

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      const currentUser = users.filter(user => user.Id === action.payload)
      return currentUser[0]

    case YES_PLEASE:
      return {
        ...state,
       Yes : state.Yes.concat(action.payload)
      }
    
    case NO_THANKS:
      return {
        ...state,
       No : state.No.concat(action.payload)
      }

    default:
      return state 
  }
}
