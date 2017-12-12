import React from 'react';
import ReactDOM from 'react-dom';
import Juncture from './juncture';

const junctureProps = {
	name: 'Holiday',
	dateTime: 99,
	id: 0
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Juncture {...junctureProps} />, div);
});
