import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Juncture = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const displayDistance = (dateTime) => `distance to/from ${dateTime}`;

const JunctureWrapper = ({name, dateTime, id, go}) => (
	<Juncture>
		<span>{name}</span>
		<span>{dateTime}</span>
		<span>{displayDistance(dateTime)}</span>
		<span><button onClick={() => go(id)}>Edit</button></span>
	</Juncture>
);

JunctureWrapper.propTypes = {
	name: PropTypes.string,
	dateTime: PropTypes.number,
	id: PropTypes.string,
	go: PropTypes.func.isRequired
};

export default JunctureWrapper;
