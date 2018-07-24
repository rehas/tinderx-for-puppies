import request from 'superagent'
import {setAlbums} from './setAlbums'

export function getAlbums() {
  return function(dispatch){
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        // we need some dispatcher function!
        dispatch(setAlbums(response.body))
      })
    }
  }