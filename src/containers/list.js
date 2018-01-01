import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JuncturesList from '../components/junctures/list';
import {goToJunctureEdit, goTo} from '../actions/actions';

const mapStateToProps = ({juncturesList}) => ({
	junctures: juncturesList.toArray()
});

const mapDistpatchToProps = (dispatch) => ({
	go: (id) => dispatch(goToJunctureEdit(id)),
	create: () => dispatch(goTo('/junctures/new'))
});

const JuncturesListContainer = ({junctures, go, create}) => (
	<JuncturesList
		junctures={junctures}
		go={go}
		create={create}
	/>
);

JuncturesListContainer.propTypes = {
	junctures: PropTypes.array.isRequired,
	go: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDistpatchToProps)(JuncturesListContainer);
