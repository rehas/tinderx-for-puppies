
export const SET_MATCHES = 'SET_MATCHES'


export function setMatches(currentUserId) {
  return {
    type : SET_MATCHES,
    payload : currentUserId
  }
}