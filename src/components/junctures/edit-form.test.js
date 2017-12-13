import React from 'react';
import ReactDOM from 'react-dom';
import {JunctureEditForm} from './edit-form';

const juncture = {
	name: 'Holiday',
	dateTime: 99,
	id: 0
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<JunctureEditForm
			juncture={juncture}
			onSubmit={() => {}}
		/>
	), div);
});
