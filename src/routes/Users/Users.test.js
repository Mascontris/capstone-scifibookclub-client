import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><Users /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

