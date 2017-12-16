import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptSignIn} from '../actions/actions';
import actions from '../actions/types';
import AuthForm from '../components/auth/form';

const mapStateToProps = ({auth}) => ({...auth});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.AUTH_UPDATE_FIELD_VALUE,
		payload: {key, value}
	}),
	signIn: (username, password) =>
		dispatch(attemptSignIn(username, password)),
	unload: () => dispatch({type: actions.AUTH_UNLOAD})
});

class SignInWrapper extends Component {
	componentWillUnmount() {
		this.props.unload();
	}

	render() {
		const onSubmit = (event) => {
			event.preventDefault();
			this.props.signIn(
				this.props.username,
				this.props.password
			);
		};

		return (
			<AuthForm
				title={'Sign In'}
				onSubmit={onSubmit}
				onFieldChange={this.props.onFieldChange}
				username={this.props.username}
				password={this.props.password}
			/>
		)
	}
}

SignInWrapper.propTypes = {
	onFieldChange: PropTypes.func.isRequired,
	signIn: PropTypes.func.isRequired,
	unload: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInWrapper);
