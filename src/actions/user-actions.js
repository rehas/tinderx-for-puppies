export const SELECT_USER = 'SELECT_USER'

export function setCurrentUser(id) {
  return {
    type: SELECT_USER,
    payload: id
  }
}