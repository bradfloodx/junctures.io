import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Authenticate = styled.form`
	border: 1px solid cornflowerblue;
	padding: 1rem;
`;

const AuthFormWrapper = ({onSubmit, title}) => (
	<Authenticate onSubmit={onSubmit}>
		<h1>{title}</h1>
		<label>
			<span>Email</span>
			<input type="email"/>
		</label>
		<label>
			<span>Password</span>
			<input type="password"/>
		</label>
		<button type="submit">Go!</button>
	</Authenticate>
);

AuthFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
};

export default AuthFormWrapper;
