import React from 'react';
import ReactDOM from 'react-dom';
import BooksList from './BooksList';
import { BrowserRouter } from 'react-router-dom';

//props.match.params.id

describe(`BooksList component`, () => {
    const props = {
        match: { params: [{
          "books": "1",

        }] }
    }

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><BooksList {...props}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
});
