import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Authenticate = styled.form`
	border: 1px solid cornflowerblue;
	padding: 1rem;
`;

const AuthenticateContainer = ({onSubmit}) => (
	<Authenticate onSubmit={onSubmit}>
		<h1>title</h1>
		<label>
			<span>Email</span>
			<input type="email" placeholder="Email..."/>
		</label>
		<label>
			<span>Password</span>
			<input type="password" placeholder="Password..."/>
		</label>
		<button type="submit">Go!</button>
	</Authenticate>
);

AuthenticateContainer.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default AuthenticateContainer;
