import request from 'superagent'
export const SET_PROFILE_URL = 'SET_PROFILE_URL'


export function setProfileUrl(url) {
  return {
    type : SET_PROFILE_URL,
    payload : url
  }
}

export function setPictureForCurrentProfile() {
  return function(dispatch){
    request('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          // we need some dispatcher function!
          console.log(response.body)
          return response.body.message
        })
        .then(url => {
          console.log(url)
          dispatch(setProfileUrl(url))
        })
    }
  }