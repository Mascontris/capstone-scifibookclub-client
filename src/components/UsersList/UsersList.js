import React, { Component } from 'react'
//import AuthApiService from '../../services/auth-api-service'
import './UsersList.css'

export default class UsersList extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  // handleSubmitJwtAuth = ev => {
  //   ev.preventDefault()
  //   this.setState({ error: null })
  //   const { user_name, password } = ev.target

  //   AuthApiService.postLogin({
  //     user_name: user_name.value,
  //     password: password.value,
  //   })
  //     .then(res => {
  //       user_name.value = ''
  //       password.value = ''
  //       this.props.onLoginSuccess()
  //     })
  //     .catch(res => {
  //       this.setState({ error: res.error })
  //     })
  // }

  render() {
    return (
      <div className="users__container">
        <div className='user__link label'>
           <a href='User1'>User 1</a> 
        </div>
        <div className='user__link label'>
        <a href='User2'>User 2</a> 
        </div>
      </div>
    )
  }
}
