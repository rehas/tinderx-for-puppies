import users from '../users/users-hardcoded'

const SELECT_USER = "SELECT_USERS"
const initialState = users[0]

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_USER:
      return action.payload
    default:
      break;
  }
  
  return state
}