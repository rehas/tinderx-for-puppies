
export const SHOW_NEW_PROFILE = 'SHOW_NEW_PROFILE'


export function showNewProfile(userId, profileId) {
  return {
    type : SHOW_NEW_PROFILE,
    payload : {
      userId, profileId
    }
  }
}