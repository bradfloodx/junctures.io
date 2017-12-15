import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Juncture from './juncture';

const JuncturesList = styled.main`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const JuncturesListWrapper = ({junctures}) => (
	<JuncturesList>
		<ol>
			{junctures.map(({name, date, time, id}) => (
				<Juncture
					name={name}
					date={date}
					time={time}
					id={id}
					key={id}
				/>
			))}
		</ol>
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
	)
};

export default JuncturesListWrapper;
