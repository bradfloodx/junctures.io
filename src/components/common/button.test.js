import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {shallow} from 'enzyme';

import Button from './button';

test('renders snapshot correctly', () => {
	const tree = renderer
		.create(<Button onClick={() => {}} text="Next"/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
});

test('renders without crashing', () => {
	shallow(<Button onClick={() => {}} text="Next"/>);
});

test('calls onClick handler prop when clicked', () => {
	const onClickHandler = jest.fn();
	const wrapper = shallow(<Button onClick={onClickHandler} text="Next"/>);

	wrapper.simulate('click');
	expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test('displays the correct text value', () => {
	const text = 'Forest';
	const onClickHandler = jest.fn();
	const wrapper = shallow(<Button onClick={onClickHandler} text={text}/>);
	expect(wrapper.children().text()).toEqual(text);
});
