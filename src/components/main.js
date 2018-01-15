import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {COLORS} from '../theme';

const breakpoints = {
	mobile: 0,
	tablet: 737,
	desktop: 1025
};

const Main = styled.main`
	margin: 0 auto;
	padding: 30px;
	max-width: 300px;
	
	@media (min-width: ${breakpoints.tablet}px) {
		max-width: 500px;
	}
	
	@media (min-width: ${breakpoints.desktop}px) {
		max-width: 700px;
	}
	
	a,
	a:visited {
		color: ${COLORS.body.links.color};
	}
`;

const MainWrapper = ({children}) => (
	<Main ariaLive="polite">
		{children}
	</Main>
);

MainWrapper.propTypes = {
	children: PropTypes.node
};

export default MainWrapper;
