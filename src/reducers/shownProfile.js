import {SHOW_NEW_PROFILE} from '../actions/profile-actions'
import { LOGOUT_USER } from '../actions/user-actions'

export default (state = null, action = {}) => {
  switch (action.type) {
    
    case SHOW_NEW_PROFILE :
        const currentUser = action.payload.users.filter(user => action.payload.userId === user.Id)[0]
        const newProfile = action.payload.users.filter(user => user.Type !== currentUser.Type)
          .filter(user => {
            return (currentUser.Yes.indexOf( user.Id) < 0)
          })
          .filter(user => { return (currentUser.No.indexOf( user.Id) < 0)})
          .filter(user => !(user.Id === action.payload.profileId))

          if (newProfile.length < 1){
            return null
          }else{
            return newProfile[0].Id
          }
    case LOGOUT_USER:
          return null
    default:
      return state 
  }
}
