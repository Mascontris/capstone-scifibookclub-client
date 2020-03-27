import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../../routes/LandingPage/LandingPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import Books from '../../routes/Books/Books'
import UserBooks from '../UserBooks/UserBooks'
import Users from '../../routes/Users/Users'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import { googleApi } from '../../config'
import './App.css'

class App extends Component {
  state = { 
    hasError: false,
    books: [],
    startIndex: 0
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

   componentDidMount() {
      fetch (`${googleApi}${this.state.startIndex}`)
      .then(results => {
          return results.json()
      })
      .then(data => {
        let books = data.items
        this.setState({
          books
        })
      })
      .catch(err => console.log(err))
    }

    fetchBooks = (val) => {
      if(this.state.startIndex === 0 && val === -1) 
      {} else {
        this.setState({startIndex: this.state.startIndex + val
        }, () => {
          fetch (`${googleApi}${this.state.startIndex}`)
          .then(results => {
              return results.json()
          })
          .then(data => {
            let books = data.items
            this.setState({
              books
            })
          })
          .catch(err => console.log(err))
          }
        )
      }
    }

  render() {
    const newBooks = this.state.books.map(book => {
        return { 
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors.join(", "),
          image: book.volumeInfo.imageLinks.smallThumbnail,
          description: book.volumeInfo.description
        } 
    })

    return (
      <div className='App' id="bg">
        <header className='App__navbar'>
          <NavBar />
        </header>
        <main className='App__main'>
        
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
           
           <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />

            <Route
              exact
              path={'/register'}
              component={RegistrationPage}
            />
          
            <Route
              exact
              path={'/login'}
              component={LoginPage}
            />

            <Route
              exact
              path={'/books'}
              render={() => <Books 
                books={newBooks} 
                fetchBooks={this.fetchBooks}
                fetchPrev={this.fetchPrev}
                page = {this.state.startIndex}/>
                }
              
            />

            <Route
              exact
              path={'/bookshelf'}
              component={UserBooks}
            />
            <Route
              exact
              path={'/users'}
              component={Users}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
