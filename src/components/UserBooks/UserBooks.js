import React, { Component } from "react";
import { Button } from "../Utils/Utils";
import { Slide } from "react-slideshow-image";
import AppliationContext from "../Context/ApplicationContext";
import "./UserBooks.css";
import AuthApiService from "../../services/auth-api-service";

export default class UserBooks extends Component {
  static contextType = AppliationContext;

  state = {
    userBooks: [],
  };

  componentDidMount() {
    const { user_id } = this.context;
    AuthApiService.getBookshelf(user_id).then(this.setUserBooksList);
  }

  removeBook = (bookId) => {
    console.log("button clicked", bookId);
    AuthApiService.deleteBook(this.context.user_id, bookId);
  };

  setUserBooksList = (userBooks) => {
    this.setState({ userBooks });
    if (this.state.userBooks.length === 0) {
      this.context.history.push("/books");
    }
  };

  renderRemoveButton = (bookId) => {
    return (
      <Button
        type="submit"
        className="removeButton"
        onClick={() => {
          this.removeBook(bookId);
        }}
      >
        Remove book
      </Button>
    );
  };

  renderSlide() {
    return this.state.userBooks.map((book, index) => (
      <div>
        <span>{this.renderRemoveButton(book.id)}</span>
        <div className="each-slide" key={index}>
          <img
            alt="book cover"
            key={index}
            src={book.cover_url}
            className="cover-image"
          ></img>
          <p className="label title">{book.title}</p>
          <p className="label description">{book.description}</p>
          <p className="label text">{book.author}</p>
        </div>
      </div>
    ));
  }

  render() {
    // eslint-disable-next-line
    const slideImages = this.state.userBooks.map((book) => book.cover_url);

    const properties = {
      duration: 1000000,
      transitionDuration: 500,
      infinite: false,
      indicators: true,
      arrows: true,
      pauseOnHover: true,
      autoplay: false,
    };

    return (
      <div className="top__margin slide-container">
        <Slide {...properties}>{this.renderSlide()}</Slide>
      </div>
    );
  }
}
