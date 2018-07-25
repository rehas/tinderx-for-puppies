import users from '../users/users-hardcoded'
import {YES_PLEASE, NO_THANKS, } from '../actions/user-actions'
import {SHOW_NEW_PROFILE} from '../actions/profile-actions'



const initialState = users

export default (state = initialState, action = {}) => {
  switch (action) {
    case SHOW_NEW_PROFILE:
    const currentUser = users.filter(user => action.payload.userId === user.Id)[0]
      return [...state,
        {...currentUser} ]

        case YES_PLEASE:
        return [...state][currentUser].Yes = state.Yes.concat(action.payload)
      
      case NO_THANKS:
        return [...state][currentUser].No = state.No.concat(action.payload)

    default:
      return state
  }

}