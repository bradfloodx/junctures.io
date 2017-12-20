import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JunctureForm from '../components/junctures/form';
import {
	attemptEditJuncture,
	fetchJunctureById,
	attemptDeleteJuncture
} from "../actions/actions";
import actions from "../actions/types";

const mapStateToProps = ({juncture}, {match: {params: {id} = ''} = {}}) => ({
	...juncture,
	id
});

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: (key, value) => dispatch({
		type: actions.JUNCTURE_UPDATE_FIELD,
		payload: {key, value}
	}),
	fetchJuncture: (id) =>
		dispatch(fetchJunctureById(id)),
	editJuncture: (juncture, id) => {
		dispatch(attemptEditJuncture(juncture, id))
	},
	deleteJuncture: (id) => {
		dispatch(attemptDeleteJuncture(id))
	},
	unload: () => dispatch({type: actions.JUNCTURE_UPDATE_UNLOAD})
});

class JunctureEditContainer extends Component {
	componentDidMount() {
		if (!this.props.fetched) {
			this.props.fetchJuncture(this.props.id);
		}
	}

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
			this.props.editJuncture(juncture, this.props.id);
		};

		return (
			<JunctureForm
				{...juncture}
				onFieldChange={this.props.onFieldChange}
				onSubmit={onSubmit}
				buttonLabel="Save"
				onDelete={() =>
					this.props.deleteJuncture(this.props.id)
				}
			/>
		);
	}

}

JunctureEditContainer.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	id: PropTypes.string,
	onFieldChange: PropTypes.func.isRequired,
	editJuncture: PropTypes.func.isRequired,
	unload: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JunctureEditContainer);
