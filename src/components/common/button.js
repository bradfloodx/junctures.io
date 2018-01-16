import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import {COLORS} from '../../theme';

const buttonHeight = 36;
const buttonMinWidth = 64;

const Button = styled.button`
	display: inline-block;
	height: ${buttonHeight}px;
	min-width: ${buttonMinWidth}px;
	border: none;
	border-radius: 2px;
	color: #000;
	background-color: hsla(0, 0%, 50%, 0.1);
	padding: 0 16px;
	font-size: 14px;
	//font-family: sans-serif;
	line-height: ${buttonHeight}px;
	cursor: pointer;
	transition: background-color ease-in-out 200ms;
	
	&:active {
		background-color: hsla(0, 0%, 50%, 0.2);
	}
`;

const ButtonWrapper = ({children}) => (
	<Button>
		{children}
	</Button>
);

ButtonWrapper.propTypes = {
	children: PropTypes.node,
};

export default ButtonWrapper;
