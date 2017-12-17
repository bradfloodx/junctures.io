import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import JuncturesList from '../components/junctures/list';
import {buildJuncturesEditRoute} from '../routes';

const mapStateToProps = ({juncturesList}) => ({
	junctures: juncturesList.toArray()
});

const mapDistpatchToProps = (dispatch) => ({
	go: (id) => dispatch(push(buildJuncturesEditRoute(id)))
});

const JuncturesListContainer = ({junctures, go}) => (
	<JuncturesList
		junctures={junctures}
		go={go}
	/>
);

JuncturesListContainer.propTypes = {
	// junctures: // Map class
	go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDistpatchToProps)(JuncturesListContainer);
