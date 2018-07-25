export const SELECT_USER = 'SELECT_USER'
export const YES_PLEASE = 'YES_PLEASE'
export const NO_THANKS = 'NO_THANKS'

export function setCurrentUser(id) {
  return {
    type: SELECT_USER,
    payload: id
  }
}

export function swipeRight(currentUserId,id) {
  return {
    type: YES_PLEASE,
    payload: [currentUserId, id]
  }
}

export function swipeLeft(currentUserId, id) {
  return {
    type: NO_THANKS,
    payload: [currentUserId, id]
  }
}
