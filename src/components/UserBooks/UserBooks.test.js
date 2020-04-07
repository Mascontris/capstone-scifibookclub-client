import React from 'react';
import ReactDOM from 'react-dom';
import UserBooks from './UserBooks';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><UserBooks /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

