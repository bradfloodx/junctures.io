import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JunctureForm from '../components/junctures/form';

const mapStateToProps = (state) => {
	return {
		juncture: {
			name: 'Mobx',
			date: 77,
			time: 22,
			id: 88
		}
	}
};

const mapDispatchToProps = (dispatch) => ({
	onFieldChange: () => {
	},
	onSubmit: () => {
	}
});

const JunctureEditContainer = (props) => (
	<JunctureForm
		{...props}
	/>
);

JunctureEditContainer.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	// juncture: PropTypes.objectOf(
	// 	PropTypes.shape({
	// 		name: PropTypes.string,
	// 		date: PropTypes.string,
	// 		time: PropTypes.string,
	// 		id: PropTypes.number
	// 	})
	// )
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(JunctureEditContainer);
