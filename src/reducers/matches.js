import { SET_MATCHES } from '../actions/setMatches'
import createNotifications from '../containers/NotificationContainer'
import { LOGOUT_USER } from '../actions/user-actions'

const initialState = JSON.parse(localStorage.getItem('matches')) || []

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MATCHES:
      const currentUserId = action.payload[0];
      const users = action.payload[1]
      const currentUser = users.filter((user) => user.Id === currentUserId)[0]
      if (currentUser === undefined) {
        return state
      }
      const matches = users
        .filter((user) => {
          return (currentUser.Yes.indexOf(user.Id) >=0)
        } )
         .filter((user) => {
          return (user.Yes.indexOf(currentUserId) >= 0)
          })
      localStorage.setItem('matches', JSON.stringify(matches))
      if (matches.length >= 1 && state.length < matches.length) {
        createNotifications('matched', matches[matches.length - 1].Name)
      }
      return matches
    case LOGOUT_USER:
      localStorage.setItem('matches', JSON.stringify(null))
      return null
    default:
      return state
  }
}