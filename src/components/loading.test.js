import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './loading';

it('renders without crashing', () => {
	ReactDOM.render((
		<Loading />
	), document.createElement('div'));
});
