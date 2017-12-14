import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import JuncturesList from '../components/junctures/list';

const mapStateToProps = ({junctures}) => ({junctures});

const JuncturesListContainer = ({junctures}) => (
	<JuncturesList
		junctures={junctures}
	/>
);

JuncturesListContainer.propTypes = {
	junctures: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.number,
			time: PropTypes.number,
			id: PropTypes.number
		})
	)
};

export default connect(mapStateToProps)(JuncturesListContainer);
