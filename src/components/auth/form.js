import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AuthForm = styled.form`
	padding: 1rem;
`;

const Label = styled.label`
	display: block;
	margin: 1em 0;
`;

const AuthFormWrapper = ({onSubmit, onFieldChange, title, username, password}) => (
	<AuthForm onSubmit={onSubmit}>
		<h3>{title}</h3>
		<Label>
			<span>Email</span>
			<input
				type="email"
				name="username"
				value={username}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</Label>
		<Label>
			<span>Password</span>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</Label>
		<button type="submit">Go!</button>
	</AuthForm>
);

AuthFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onFieldChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	username: PropTypes.string,
	password: PropTypes.string
};

export default AuthFormWrapper;
