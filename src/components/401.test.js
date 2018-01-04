import React from 'react';
import ReactDOM from 'react-dom';

import Unauthorised from './401';

it('renders without crashing', () => {
	ReactDOM.render((
		<Unauthorised />
	), document.createElement('div'));
});
