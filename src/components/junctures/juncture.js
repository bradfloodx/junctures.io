import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moment from 'moment';
import 'moment-precise-range-plugin';

const Juncture = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Detail = styled.div`
	margin: 0 30px;
`;

const displayDistance = (date, time) => {
	const dateParts = date.split('-');
	const timeParts = time.split(':');

	const dateTimeParts = {
		year: dateParts[0],
		month: dateParts[1] - 1, // Month needs to be zero-indexed
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
	<Juncture>
		<Detail>{name}</Detail>
		<Detail>{date} {time}</Detail>
		<Detail>{displayDistance(date, time)}</Detail>
		<Detail>
			<button onClick={() => go(id)}>Edit</button>
		</Detail>
	</Juncture>
);

JunctureWrapper.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	time: PropTypes.string,
	id: PropTypes.string,
	go: PropTypes.func.isRequired
};

export default JunctureWrapper;
