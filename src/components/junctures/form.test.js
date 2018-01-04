import React from 'react';
import ReactDOM from 'react-dom';
import JunctureEditForm from './form';

const juncture = {
	name: 'Holiday',
	dateTime: 99,
	id: 0
};

it('renders without crashing', () => {
	ReactDOM.render((
		<JunctureEditForm
			juncture={juncture}
			onSubmit={() => {}}
		/>
	), document.createElement('div'));
});
