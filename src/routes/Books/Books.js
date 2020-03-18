import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import BooksList from '../../components/BooksList/BooksList'

export default class Books extends Component {
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
  if (!this.props.books) {
    return <div>Loading books</div>;
  }
    return (
      <div>
        <div className='navigation'>
          <div className='page__number'> Page:{this.props.page + 1}</div>
          <button className='prev' onClick={()=> {this.props.fetchBooks(-1)}}>Back</button>
          <button className='next' onClick={()=> {this.props.fetchBooks(1)}}>Next</button>
        </div>

        <Section className='BooksList'>
          <BooksList books={this.props.books}/>
        </Section>
      </div>
    )
  }
}