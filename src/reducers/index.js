import { combineReducers } from 'redux'
import users from './users'
import currentUser from './currentUser'
import shownProfile from './shownProfile'

export default combineReducers({
  users,
  currentUser,
  shownProfile
})