import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './home';

it('renders without crashing', () => {
	ReactDOM.render((
		<BrowserRouter>
			<Home
				userAuthenticated={false}
			/>
		</BrowserRouter>
	), document.createElement('div'));
});
