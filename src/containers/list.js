import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JuncturesList from '../components/junctures/list';

const mapStateToProps = ({juncturesList}) => ({juncturesList});

const JuncturesListContainer = ({juncturesList}) => (
	<JuncturesList
		junctures={juncturesList}
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
	)
};

export default connect(mapStateToProps)(JuncturesListContainer);
