import React, { Component } from 'react'
//import AuthApiService from '../../services/auth-api-service'
import './BooksList.css'

export default class BooksList extends Component {
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
    const { error } = this.state
    
    const booksInfo = this.props.books.map((book, index)  => {
      return (
        <li key={index}>
          <img className='cover' alt="Book cover" src={book.image} />
          <h3 className='title'>{book.title}</h3>
          <div className='text__section'>
            <p className='description'>{book.description}</p>
            <p className='authors'>Author(s): {book.authors}</p> 
          </div>
        </li>
      )
      })

    return (
      <div className='top__margin books__list'>
        <h2>{error}</h2>
        <ul className='books__section'>
          {booksInfo}
        </ul>
      </div>
    )
  }
}
