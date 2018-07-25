export const SET_MATCHES = 'SET_MATCHES'


export function setMatches(currentUserId, users) {
  return {
    type : SET_MATCHES,
    payload : [currentUserId, users]
  }
}