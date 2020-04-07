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

  state = { 
    error: null,
    bookshelfTitles: [] };

  componentDidMount() {
    AuthApiService.getBookshelf(this.context.user_id).then(this.setBookshelf)
  }

  renderButton = (index, bookData) => {
    if(this.state.bookshelfTitles.includes(bookData.title)) {
      return (
        <Button
            type="submit"
          >
            Already in bookshelf
          </Button>

      )
    } else { return (
      <Button
            type="submit"
            onClick={() => {
              this.addToBookshelf(index, bookData)
              window.location.reload(false)
            }}
          >
            Add to bookshelf
          </Button>
    )}
    
  }

  setBookshelf = bookshelf => {
    this.setState({
      bookshelfTitles: bookshelf.map(book => {return book.title})
    })
  }

  addToBookshelf = (e, bookData) => {
    AuthApiService.postBook(this.context.user_id, bookData);
    this.renderButton(e, bookData)
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
          this.renderButton(index, bookData)
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
