import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptRegister} from '../actions/actions';
import actions from '../actions/types';
import AuthForm from '../components/auth/form';

const mapStateToProps = ({auth}) => ({...auth});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.UPDATE_FIELD_VALUE_AUTH,
		payload: {
			key,
			value
		}
	}),
	register: (username, password) =>
		dispatch(attemptRegister(username, password))
});

const RegisterWrapper = (props) => {
	const onSubmit = (event) => {
		event.preventDefault();
		props.register(
			props.username,
			props.password
		);
	};

	return (
		<AuthForm
			title={'Register'}
			onSubmit={onSubmit}
			onFieldChange={props.onFieldChange}
			username={props.username}
			password={props.password}
		/>
	)
};

RegisterWrapper.propTypes = {
	onFieldChange: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);
