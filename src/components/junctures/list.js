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
			{junctures.map(({name, dateTime, id}) => (
				<Juncture
					name={name}
					dateTime={dateTime}
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
			dateTime: PropTypes.number,
			id: PropTypes.number
		})
	)
};

export default JuncturesListWrapper;
