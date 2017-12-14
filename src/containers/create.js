import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptCreateJuncture} from '../actions/actions';
import actions from '../actions/types';
import JunctureForm from '../components/junctures/form';

const mapStateToProps = ({junctures}) => ({
	juncture: junctures.edit
});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.JUNCTURE_UPDATE_FIELD,
		payload: {key, value}
	}),
	createJuncture: (juncture) => {
		dispatch(attemptCreateJuncture(juncture))
	}
});

const JunctureCreateContainer = (props) => {
	const onSubmit = (event) => {
		event.preventDefault();
		props.createJuncture({
			name: props.name,
			date: props.date,
			time: props.time
		});
	};

	return (
		<JunctureForm
			juncture={props.juncture}
			onFieldChange={props.onFieldChange}
			onSubmit={onSubmit}
		/>
	)
};

JunctureCreateContainer.propTypes = {
	juncture: PropTypes.objectOf(
		PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.string,
			time: PropTypes.string,
		})
	),
	onFieldChange: PropTypes.func.isRequired,
	createJuncture: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JunctureCreateContainer);
