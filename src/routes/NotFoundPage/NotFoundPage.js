import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import './NotFoundPage.css'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Section>
    )
  }
}
