import users from '../users/users-hardcoded'
import {SET_PROFILE_URL} from '../actions/setProfileUrl'

const SELECT_USER = "SELECT_USERS"
const initialState = users[0]

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_USER:
      return state
      // const newUser = users.filter(user => user.id === action.payload)[0]

      // if (newUser){
      //   return newUser
      // }else{
      //   return state
      // }
    case SET_PROFILE_URL:
      const newProfileImgState = [action.payload]
      console.log('were in current suser setprofile url reducer')
      console.log(state)
      console.log(newProfileImgState)
      return {
        ...state,
        Pic : newProfileImgState
      }
    default:
      return state;
  }
  
}