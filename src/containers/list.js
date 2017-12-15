import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import JuncturesList from '../components/junctures/list';
import {buildJuncturesEditRoute} from '../routes';

const mapStateToProps = ({juncturesList}) => ({juncturesList});

const mapDistpatchToProps = (dispatch) => ({
	go: (id) => dispatch(push(buildJuncturesEditRoute(id)))
});

const JuncturesListContainer = ({juncturesList, go}) => (
	<JuncturesList
		junctures={juncturesList}
		go={go}
	/>
);

JuncturesListContainer.propTypes = {
	juncturesList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.string,
			time: PropTypes.string,
			id: PropTypes.string
		})
	),
	go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDistpatchToProps)(JuncturesListContainer);
