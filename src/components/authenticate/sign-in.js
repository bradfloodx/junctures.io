import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptSignIn} from '../../actions';
import AuthForm from './form';

const mapStateToProps = ({auth}) => ({...auth});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: 'UPDATE_FIELD_VALUE_AUTH',
		payload: {
			key,
			value
		}
	}),
	signIn: (username, password) =>
		dispatch(attemptSignIn(username, password))
});

const SignInWrapper = (props) => {
	const onSubmit = (event) => {
		event.preventDefault();
		props.signIn(
			props.username,
			props.password
		);
	};

	return (
		<AuthForm
			title={'Sign In'}
			onSubmit={onSubmit}
			onFieldChange={props.onFieldChange}
			username={props.username}
			password={props.password}
		/>
	)
};

SignInWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
