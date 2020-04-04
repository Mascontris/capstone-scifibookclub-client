import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        /*
          whenever a login is performed:
          1. save the token in local storage
        */
       //console.log(res.authToken)
        //TokenService.saveAuthToken(res.authToken)
        return res
      })
  },

  postBook(user_id, book) {
    return fetch(`${config.API_ENDPOINT}users/${user_id}/bookshelf`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteBook(user_id, book_id) {
    return fetch(`${config.API_ENDPOINT}users/${user_id}/bookshelf/${book_id}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json'
      }
    })
    .then( () => {
      window.location.reload()})
    .catch(error => console.error('Error:', error)); 
},

  getBookshelf(user_id) {
    return fetch(`${config.API_ENDPOINT}users/${user_id}/bookshelf`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getUsers() {
    return fetch(`${config.API_ENDPOINT}users`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  

}

export default AuthApiService
