import users from '../users/users-hardcoded'
import {SHOW_NEW_PROFILE} from '../actions/profile-actions'

export default (state = [], action = {}) => {
  switch (action.type) {
    
    case SHOW_NEW_PROFILE :
        const currentUser = action.payload.users.filter(user => action.payload.userId === user.Id)[0]
        const newProfile = action.payload.users.filter(user => user.Type !== currentUser.Type)
          .filter(user => !currentUser.Yes.includes( user.Id))
          .filter(user => !currentUser.No.includes( user.Id))
          .filter(user => !(user.Id === action.payload.profileId))

          if (newProfile.length < 1){
            return null
          }else{
            return newProfile[0].Id
          }
    default:
      return state 
  }
}
