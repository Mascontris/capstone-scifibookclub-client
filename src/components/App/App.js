import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
//import PrivateRoute from '../Utils/PrivateRoute'
//import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../../routes/LandingPage/LandingPage'
//import ArticlePage from '../../routes/ArticlePage/ArticlePage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import Books from '../../routes/Books/Books'
import Bookshelf from '../../routes/Bookshelf/Bookshelf'
import Users from '../../routes/Users/Users'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import { googleApi } from '../../config'
//import TokenService from '../../services/token-service'
//import AuthApiService from '../../services/auth-api-service'
//import IdleService from '../../services/idle-service'
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

    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    // IdleService.setIdleCallback(this.logoutFromIdle)

    /* if a user is logged in */
    // if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      // IdleService.regiserIdleTimerResets()

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      // TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
  //       AuthApiService.postRefreshToken()
  //     })
  //   }
  //}

  //componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    // IdleService.unRegisterIdleResets()
    /*
      and remove the refresh endpoint request
    */
    // TokenService.clearCallbackBeforeExpiry()
  // }

  // logoutFromIdle = () => {
  //   /* remove the token from localStorage */
  //   TokenService.clearAuthToken()
  //   /* remove any queued calls to the refresh endpoint */
  //   TokenService.clearCallbackBeforeExpiry()
  //   /* remove the timeouts that auto logout when idle */
  //   IdleService.unRegisterIdleResets()
  //   /*
  //     react won't know the token has been removed from local storage,
  //     so we need to tell React to rerender
  //   */
  //   this.forceUpdate()
  // }

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
              component={Bookshelf}
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
