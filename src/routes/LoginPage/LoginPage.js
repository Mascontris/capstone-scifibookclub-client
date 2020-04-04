import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  
  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm/>
      </Section>
    )
  }
}
