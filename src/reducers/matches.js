import { SET_MATCHES } from '../actions/setMatches'


export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_MATCHES:
      const currentUserId=action.payload[0];
      const users = action.payload[1]
      const currentUser = users.filter((user)=>user.Id === currentUserId)[0]

      console.log(currentUser.Yes)
      return state
      users.filter((user)=>user.Id === currentUserId)
    return state

    default:
      return state
  }
}