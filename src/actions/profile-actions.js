
export const SHOW_NEW_PROFILE = 'SHOW_NEW_PROFILE'
export const CREATE_NEW_PROFILE = 'CREATE_NEW_PROFILE'


export function showNewProfile(userId, profileId) {
  return {
    type : SHOW_NEW_PROFILE,
    payload : {
      userId, profileId
    }
  }
}

export function createNewProfile(userObject) {
  return {
    type : CREATE_NEW_PROFILE,
    payload : userObject
  }
}