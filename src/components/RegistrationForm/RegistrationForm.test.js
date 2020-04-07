import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><RegistrationForm /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
});

