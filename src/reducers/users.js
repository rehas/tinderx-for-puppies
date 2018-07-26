import users from '../users/users-hardcoded'
import { YES_PLEASE, NO_THANKS, GET_STATE_FROM_BROWSER } from '../actions/user-actions'
import { CREATE_NEW_PROFILE } from '../actions/profile-actions'


const initialState = JSON.parse(localStorage.getItem('users')) || users

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_STATE_FROM_BROWSER:
      if(localStorage.getItem('users')!==null){
      return JSON.parse(localStorage.getItem('users'))}
      else {return state}
    
      case YES_PLEASE:
      const newState = [...state]
      newState[action.payload[0] - 1].Yes = newState[action.payload[0] - 1].Yes.concat(action.payload[1])
      localStorage.setItem('users', JSON.stringify(newState))
      return newState

    case NO_THANKS:
      const newState2 = [...state]
      newState2[action.payload[0] - 1].No = newState2[action.payload[0] - 1].No.concat(action.payload[1])
      localStorage.setItem('users', JSON.stringify(newState2))
      return newState2

    case CREATE_NEW_PROFILE:
      const newStateWithAddedProfile = [
        ...state,
        action.payload
      ]
      localStorage.setItem('users', JSON.stringify(newStateWithAddedProfile))
      return newStateWithAddedProfile

    default:
      return state

  }

}