
export const SHOW_NEW_PROFILE = 'SHOW_NEW_PROFILE'
export const CREATE_NEW_PROFILE = 'CREATE_NEW_PROFILE'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'


export function showNewProfile(userId, profileId, users) {
  return {
    type : SHOW_NEW_PROFILE,
    payload : {
      userId, profileId, users
    }
  }
}

export function createNewProfile(userObject) {
  return {
    type : CREATE_NEW_PROFILE,
    payload : userObject
  }
}

export function UpdateProfile(userObject){
  return{
    type : UPDATE_PROFILE,
    payload : userObject
  }
}