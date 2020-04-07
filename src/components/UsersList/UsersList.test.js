import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><UsersList /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

