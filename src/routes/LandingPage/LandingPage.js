import React, { Component } from "react";
import './LandingPage.css'

export default class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <div className="landing__page">
        <section className="text">
          <section>
            <header>
              <h3>Browse a selection of science fiction books.</h3>
            </header>
            <p>
              see a list of the top science fiction books by popular authors.
            </p>
          </section>

          <section>
            <header>
              <h3>Add books to your own bookshelf.</h3>
            </header>
            <p>
              Select books that you find interesting and add them to your
              personal bookshelf for future purhase.
            </p>
          </section>

          <section>
            <header>
              <h3>Browse other user's bookshelves</h3>
            </header>
            <p>
              View their comments and suggestions. You can also add their books
              to your bookshelf for future reading.
            </p>
          </section>

          <section>
            <header>
              <h3>Rate books you've read for other users to view.</h3>
            </header>
            <p>
              If you've registered and are logged in, you can leave comments and
              reviews for your favorite science fiction books.
            </p>
          </section>
        </section>
      </div>
    );
  }
}
