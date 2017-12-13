import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		onSubmit: () => {}
	}
};

const Authenticate = styled.form`
	border: 1px solid cornflowerblue;
	padding: 1rem;
`;

const AuthenticateWrapper = ({onSubmit}) => (
	<Authenticate onSubmit={onSubmit}>
		<h1>Title</h1>
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

AuthenticateWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(AuthenticateWrapper);
