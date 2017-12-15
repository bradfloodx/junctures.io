import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JunctureForm from '../components/junctures/form';
import {attemptEditJuncture} from "../actions/actions";
import actions from "../actions/types";

const mapStateToProps = ({juncture}) => ({...juncture});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.JUNCTURE_UPDATE_FIELD,
		payload: {key, value}
	}),
	editJuncture: (juncture) => {
		dispatch(attemptEditJuncture(juncture))
	}
});

const JunctureEditContainer = (props) => {
	const onSubmit = (event) => {
		event.preventDefault();
		props.editJuncture({
			name: props.name,
			date: props.date,
			time: props.time,
			id: props.id
		});
	};

	return (
		<JunctureForm
			name={props.name}
			date={props.date}
			time={props.time}
			onFieldChange={props.onFieldChange}
			onSubmit={onSubmit}
		/>
	)
};

JunctureEditContainer.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	id: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JunctureEditContainer);
