import users from '../users/users-hardcoded'
import {SELECT_USER } from '../actions/user-actions'

const initialState = users[0]

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      const currentUser = users.filter(user => user.Id === action.payload)
      return currentUser[0]
      
    default:
      return state 
  }
}
