import React from 'react';
import ReactDOM from 'react-dom';
import JuncturesList from './list';

const junctures = [
	{
		name: 'Holiday',
		dateTime: 99,
		id: 0
	}
];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<JuncturesList junctures={junctures}/>, div);
});
