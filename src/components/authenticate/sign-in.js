import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import signIn from '../../actions';
import AuthForm from './form';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	onChangeField: (key, value) => dispatch({
		type: 'UPDATE_FIELD_VALUE_AUTH',
		payload: {
			key,
			value
		}
	})
	onSubmit: (event) => dispatch()
};

const SignInWrapper = ({onSubmit}) => (
	<AuthForm
		title={'Sign In'}
		onSubmit={onSubmit}
	/>
);

SignInWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
