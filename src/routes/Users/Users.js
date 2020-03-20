import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import UsersList from '../../components/UsersList/UsersList'

export default class Users extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='UsersPage'>
        <UsersList></UsersList>
      </Section>
    )
  }
}