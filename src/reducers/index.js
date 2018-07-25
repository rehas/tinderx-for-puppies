import { combineReducers } from 'redux'
import users from './users'
import currentUser from './currentUser'
import shownProfile from './shownProfile'
import matches from './matches'

export default combineReducers({
  users,
  currentUser,
  shownProfile,
  matches
})