import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptRegister} from '../actions/actions';
import actions from '../actions/types';
import AuthForm from '../components/auth/form';

const mapStateToProps = ({auth}) => ({...auth});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.AUTH_UPDATE_FIELD_VALUE,
		payload: {
			key,
			value
		}
	}),
	register: (username, password) =>
		dispatch(attemptRegister(username, password)),
	unload: () => dispatch({type: actions.AUTH_UNLOAD})
});

class RegisterWrapper extends Component {
	componentWillUnmount() {
		this.props.unload();
	}

	render() {
		const onSubmit = (event) => {
			event.preventDefault();
			this.props.register(
				this.props.username,
				this.props.password
			);
		};

		return (
			<AuthForm
				title={'Register'}
				onSubmit={onSubmit}
				onFieldChange={this.props.onFieldChange}
				username={this.props.username}
				password={this.props.password}
				buttonLabel={'Register'}
			/>
		)
	}
};

RegisterWrapper.propTypes = {
	unload: PropTypes.func.isRequired,
	onFieldChange: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);
