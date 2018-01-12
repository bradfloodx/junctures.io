import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import List from 'material-ui/List';

import Juncture from './juncture';

const JuncturesList = styled.article`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	background-color: hsla(0, 0%, 76%, 1);
`;

const JuncturesListWrapper = ({junctures, go, create}) => (
	<JuncturesList>
		{junctures.length ? (
			<List dense={false}>
				{junctures.map(({name, date, time, id}) => (
					<Juncture
						name={name}
						date={date}
						time={time}
						id={id}
						go={go}
						key={id}
					/>
				))}
			</List>
		) : (
			<div>Haven't created any junctures yet? <a onClick={create}>Create one now</a>.</div>
		)}
	</JuncturesList>
);

JuncturesListWrapper.propTypes = {
	junctures: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.string,
			time: PropTypes.string,
			id: PropTypes.string
		})
	),
	go: PropTypes.func.isRequired,
	create: PropTypes.func.isRequired
};

export default JuncturesListWrapper;
