import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><NotFoundPage /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

