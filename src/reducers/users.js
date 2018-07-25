import users from '../users/users-hardcoded'
import { YES_PLEASE, NO_THANKS, } from '../actions/user-actions'



const initialState = users

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case YES_PLEASE:
      const newState = [...state]
      newState[action.payload[0] - 1].Yes = newState[action.payload[0] - 1].Yes.concat(action.payload[1])
      return newState

    case NO_THANKS:
    const newState2 = [...state]
    newState2[action.payload[0] - 1].No = newState2[action.payload[0] - 1].No.concat(action.payload[1])
    return newState2

    default:
      return state
  }

}