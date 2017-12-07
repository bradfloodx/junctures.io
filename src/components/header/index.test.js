import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header links={links}/>, div);
});
