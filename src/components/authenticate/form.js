import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Authenticate = styled.form`
	border: 1px solid cornflowerblue;
	padding: 1rem;
`;

const AuthFormWrapper = ({onSubmit, onFieldChange, title, username, password}) => (
	<Authenticate onSubmit={onSubmit}>
		<h1>{title}</h1>
		<label>
			<span>Email</span>
			<input
				type="email"
				name="username"
				value={username}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</label>
		<label>
			<span>Password</span>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(event) => {
					onFieldChange(event.target.name, event.target.value)
				}}
			/>
		</label>
		<button type="submit">Go!</button>
	</Authenticate>
);

AuthFormWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onFieldChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	username: PropTypes.string,
	password: PropTypes.string
};

export default AuthFormWrapper;
