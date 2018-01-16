import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const buttonHeight = 36;
const buttonMinWidth = 64;

const Button = styled.button`
	display: inline-block;
	padding: 0 16px;
	height: ${buttonHeight}px;
	min-width: ${buttonMinWidth}px;
	border: none;
	border-radius: 2px;
	line-height: ${buttonHeight}px;
	font-size: 14px;
	color: #000;
	background-color: hsla(0, 0%, 50%, 0.1);
	cursor: pointer;
	transition: background-color ease-in-out 200ms;
	
	&:active {
		background-color: hsla(0, 0%, 50%, 0.2);
	}
`;

const ButtonWrapper = ({onClick, text, type}) => (
	<Button onClick={onClick} type={type}>
		{text}
	</Button>
);

ButtonWrapper.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
};

ButtonWrapper.defaultProps = {
	type: '',
};

export default ButtonWrapper;
