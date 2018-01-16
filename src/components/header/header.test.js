import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderWrapper as Header} from './header';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
];

it('renders without crashing', () => {
	ReactDOM.render((
		<Header
			links={links}
			go={() => {}}
			classes={{}}
		/>
	), document.createElement('div'));
});
