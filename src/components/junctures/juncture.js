import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment-precise-range-plugin';

import {
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	ListItemIcon
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FlareIcon from 'material-ui-icons/Flare';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

const displayDistance = (date, time) => {
	const dateParts = date.split('-');
	const timeParts = time.split(':');

	const dateTimeParts = {
		year: dateParts[0],
		month: dateParts[1] - 1, // Month must be zero-indexed
		day: dateParts[2],
		hour: timeParts[0],
		minute: timeParts[1]
	};

	const momentDateTime = moment(dateTimeParts);
	const currentDateTime = moment();
	const difference = moment.preciseDiff(momentDateTime, currentDateTime, true);

	let distance = '';
	distance += difference.years ? `${difference.years} years, ` : '';
	distance += difference.months ? `${difference.months} months, ` : '';
	distance += difference.days ? `${difference.days} days ` : '';
	distance += difference.hours ? `${difference.hours} hours ` : '';
	distance += difference.minutes ? `${difference.minutes} minutes ` : '';

	return distance
};

const JunctureWrapper = ({ name, date, time, id, go }) => (
	<ListItem button={true} onClick={() => go(id)}>
		<ListItemAvatar>
			<ListItemIcon>
				<FlareIcon/>
			</ListItemIcon>
		</ListItemAvatar>
		<ListItemText
			primary={name}
			secondary={displayDistance(date, time)}
		/>
		<ListItemSecondaryAction
			style={{display: 'none'}}
		>
			<IconButton
				aria-label="Edit"
				onClick={() => go(id)}
			>
				<ModeEditIcon/>
			</IconButton>
		</ListItemSecondaryAction>
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
