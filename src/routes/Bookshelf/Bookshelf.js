import React, { Component } from 'react'
import UserBooks from '../../components/UserBooks/UserBooks'

export default class Bookshelf extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

render() {
  if (!this.props) {
    return <div>Loading bookshelf</div>;
  }
    return (
      <div>
        <UserBooks></UserBooks>
      </div>
    )
  }
}