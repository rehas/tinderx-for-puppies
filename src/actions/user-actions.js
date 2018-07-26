export const SELECT_USER = 'SELECT_USER'
export const YES_PLEASE = 'YES_PLEASE'
export const NO_THANKS = 'NO_THANKS'
export const GET_STATE_FROM_BROWSER = 'GET_STATE_FROM_BROWSER'


export function getStateFromBrowser(){
  return{
    type: GET_STATE_FROM_BROWSER
  }
}

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
