import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Main = styled.main`
	padding: 1em;
	display: flex;
	justify-content:center;
`;

const MainWrapper = ({children}) => (
	<Main>
		{children}
	</Main>
);

MainWrapper.propTypes = {
	// children: PropTypes.node
};

export default MainWrapper;
