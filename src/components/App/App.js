import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import Books from "../../routes/Books/Books";
import Bookshelf from "../../routes/Bookshelf/Bookshelf";
import Users from "../../routes/Users/Users";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import ApplicationContext from "../Context/ApplicationContext";
import config from "../../config";
import "./App.css";

class App extends Component {
  state = {
    hasError: false,
    books: [],
    startIndex: 0,
    user_id: "",
    hasToken: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    fetch(`${config.GOOGLE_API}${this.state.startIndex}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let books = data.items;
        this.setState({
          books
        });
      })
      .catch(err => console.log(err));
      this.setState({hasToken: TokenService.hasAuthToken()})
  }

  fetchBooks = val => {
    if (this.state.startIndex === 0 && val === -4) {
    } else {
      this.setState({ startIndex: this.state.startIndex + val }, () => {
        fetch(`${config.GOOGLE_API}${this.state.startIndex}`)
          .then(results => {
            return results.json();
          })
          .then(data => {
            let books = data.items;
            this.setState({
              books
            });
          })
          .catch(err => console.log(err));
      });
    }
  };

  handleRegistrationSuccess = user => {
    this.setState({ user_id: user.user_id });
    AuthApiService.postLogin(user).then(token => {
      this.handleLoginSuccess(token.authToken);
    });
  };

  handleLoginSuccess = token => {
    TokenService.saveAuthToken(token)
    this.setState({ hasToken: true })
    const { user_id } = TokenService.readJwtToken(token)
    this.setState({ user_id: user_id })
    window.localStorage.setItem('user_id', user_id)
    this.props.history.push("/bookshelf")
  };

  render() {
    const newBooks = this.state.books.map(book => {
      return {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors.join(", "),
        image: book.volumeInfo.imageLinks.smallThumbnail,
        description: book.volumeInfo.description
      };
    });

    // value here that is an object, gets passed to the provider - in here include the state data and event handlers
    const value = {
      user_id: localStorage.getItem('user_id'),
      handleLoginSuccess: this.handleLoginSuccess,
      handleRegistrationSuccess: this.handleRegistrationSuccess,
      logout: this.logout,
      fetchBooks: this.fetchBooks,
      books: newBooks,
      history: this.props.history
    };

    // wrap the application in the context provider */
    return (
      <div className="App" id="bg">
        <ApplicationContext.Provider value={value}>
          <header className="App__navbar">
            <NavBar />
          </header>
          <main className="App__main">
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <Route exact path={"/"} component={LandingPage} />

              <Route exact path={"/register"} component={RegistrationPage} />

              <Route exact path={"/login"} component={LoginPage} />

              <Route
                exact
                path={"/books"}
                render={() => (
                  <Books
                    page={this.state.startIndex}
                  />
                )}
              />
               <Route exact path={"/bookshelf"} component={Bookshelf} />
               <Route exact path={"/users"} component={Users} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </ApplicationContext.Provider>
      </div>
    );
  }
}

export default withRouter(App);
