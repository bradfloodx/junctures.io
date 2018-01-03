import React from 'react';
import PropTypes from 'prop-types';

import {
	ListItem,
	ListItemIcon,
	ListItemText
} from 'material-ui/List';
import FlareIcon from 'material-ui-icons/Flare';

import {displayDistance} from '../../utils';

const JunctureWrapper = ({ name, date, time, id, go }) => (
	<ListItem button={true} onClick={() => go(id)}>
		<ListItemIcon>
			<FlareIcon/>
		</ListItemIcon>
		<ListItemText
			primary={name}
			secondary={displayDistance(date, time)}
		/>
	</ListItem>
);

JunctureWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	id: PropTypes.string,
	go: PropTypes.func.isRequired
};

export default JunctureWrapper;
