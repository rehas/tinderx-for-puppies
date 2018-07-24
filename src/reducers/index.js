import { combineReducers } from 'redux'
import users from './users'
import currentUser from './currentUser'

export default combineReducers({
  users,
  currentUser
})