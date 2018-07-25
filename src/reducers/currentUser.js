import users from '../users/users-hardcoded'
import {SELECT_USER} from '../actions/user-actions'

const initialState = users[0].Id

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case SELECT_USER:
      const currentUser = users.filter(user => user.Id === action.payload)[0].Id
      return currentUser

    default:
      return state 
  }
}
