import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptCreateJuncture} from '../actions/junctures';
import actions from '../actions/types';
import JunctureForm from '../components/junctures/form';
import {Component} from "react";

const mapStateToProps = ({juncture}) => ({...juncture});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.JUNCTURE_UPDATE_FIELD,
		payload: {key, value}
	}),
	createJuncture: (juncture) => {
		dispatch(attemptCreateJuncture(juncture))
	},
	unload: () => dispatch({type: actions.JUNCTURE_UPDATE_UNLOAD})
});

class JunctureCreateContainer extends Component {
	componentWillUnmount() {
		this.props.unload();
	}

	render() {
		const juncture = {
				name: this.props.name,
				date: this.props.date,
				time: this.props.time
		};

		const onSubmit = (event) => {
			event.preventDefault();
			this.props.createJuncture(juncture);
		};

		return (
			<JunctureForm
				{...juncture}
				onFieldChange={this.props.onFieldChange}
				onSubmit={onSubmit}
				title="A New Juncture"
				buttonLabel="Create"
			/>
		);
	}
}

JunctureCreateContainer.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	onFieldChange: PropTypes.func.isRequired,
	createJuncture: PropTypes.func.isRequired,
	unload: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JunctureCreateContainer);
