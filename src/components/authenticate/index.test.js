import React from 'react';
import ReactDOM from 'react-dom';
import Authenticate from './index';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Authenticate onSubmit={() => {}}/>, div);
});
