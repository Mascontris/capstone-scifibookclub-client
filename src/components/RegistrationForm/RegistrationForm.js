import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import ApplicationContext from '../Context/ApplicationContext'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {

  }

  static contextType = ApplicationContext

  state = { 
    error: null,
    full_name: "",
    user_name: "",
    password: ""
  }

  handleChange = ev => {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = this.state;
    const registeredUser = { full_name, user_name, password }
    this.setState({ error: null })

    AuthApiService.postUser({
      full_name: full_name,
      user_name: user_name,
      password: password
    })
      .then(user => {
        // set state to reset the values including error
        console.log(user)
        this.setState({
          full_name: "",
          user_name:"",
          password:"",
          error: null
        })
        registeredUser.user_id = user.id;
        this.context.handleRegistrationSuccess(registeredUser)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error, full_name, user_name, password } = this.state

    return (
      <form
        className='top__margin RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='label full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            value={full_name}
            onChange={this.handleChange}
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='label user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            value={user_name}
            onChange={this.handleChange}
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='label password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
