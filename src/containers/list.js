import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JuncturesList from '../components/junctures/list';
import {goToJunctureEdit} from '../actions/actions';

const mapStateToProps = ({juncturesList}) => ({
	junctures: juncturesList.toArray()
});

const mapDistpatchToProps = (dispatch) => ({
	go: (id) => dispatch(goToJunctureEdit(id))
});

const JuncturesListContainer = ({junctures, go}) => (
	<JuncturesList
		junctures={junctures}
		go={go}
	/>
);

JuncturesListContainer.propTypes = {
	junctures: PropTypes.array.isRequired,
	go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDistpatchToProps)(JuncturesListContainer);
