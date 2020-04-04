import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./BooksList.css";
import { Button } from "../Utils/Utils";
import ApplicationContext from "../Context/ApplicationContext";

export default class BooksList extends Component {
  static defaultProps = {
    addToBookshelf: () => {}
  };

  static contextType = ApplicationContext;

  state = { error: null };

  addToBookshelf = (e, bookData) => {
    AuthApiService.postBook(this.context.user_id, bookData);
  };

  render() {
    const { error } = this.state;

    const booksInfo = this.props.books.map((book, index) => {
      const bookData = {
        cover_url: book.image,
        title: book.title,
        description: book.description,
        author: book.authors
      };

      this.renderSubmitButton = () => {
        if (!this.context.user_id) {
          return <Button type="submit" onClick={() => {this.context.history.push('/login')}}>Login to add book</Button>;
        }
        return (
          <Button
            type="submit"
            onClick={() => {
              this.addToBookshelf(index, bookData);
            }}
          >
            Add to bookshelf
          </Button>
        );
      };

      return (
        <li key={index}>
          <img className="cover" alt="Book cover" src={book.image} />
          <h3 className="title">{book.title}</h3>
          <div className="text__section">
            <p className="description">{book.description}</p>
            <p className="authors">Author(s): {book.authors}</p>
            <p>{this.renderSubmitButton()}</p>
          </div>
        </li>
      );
    });

    return (
      <div className="top__margin books__list">
        <h2>{error}</h2>
        <ul className="books__section">{booksInfo}</ul>
      </div>
    );
  }
}
