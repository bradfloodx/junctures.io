import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './button';

it('render correctly', () => {
	const tree = renderer
		.create(<Button text="Next"/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
});


