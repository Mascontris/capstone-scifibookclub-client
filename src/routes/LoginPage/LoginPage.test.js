import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

