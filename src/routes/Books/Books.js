import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import BooksList from "../../components/BooksList/BooksList";
import ApplicationContext from "../../components/Context/ApplicationContext";

export default class Books extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = ApplicationContext;

  state = {
    page: 1,
  };

  updatePageNumber = (val) => {
    if (this.state.page === 1 && val === -1) {
    } else {
      this.setState({ page: this.state.page + val });
    }
  };

  render() {
    if (!this.context.books) {
      return <div>Loading books</div>;
    }
    return (
      <div>
        <Section className="BooksList">
          <div className="navigation">
            <div className="page__number"> Page:{this.state.page}</div>
            <button
              className="prev"
              onClick={() => {
                this.context.fetchBooks(-5);
                this.updatePageNumber(-1);
              }}
            >
              Back
            </button>
            <button
              className="next"
              onClick={() => {
                this.context.fetchBooks(5);
                this.updatePageNumber(1);
              }}
            >
              Next
            </button>
          
          <BooksList books={this.context.books} />
        </div>
        </Section>
      </div>
    );
  }
}
