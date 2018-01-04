import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';

it('renders without crashing', () => {
	ReactDOM.render((
		<Main>
			<p>Sausage dog</p>
		</Main>
	), document.createElement('div'));
});
