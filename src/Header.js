import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderContainer = () => (
	<Header>
		<span>TaN</span>
		<nav>
			<ul>
				<li>Sign In</li>
				<li>Register</li>
			</ul>
		</nav>
	</Header>
);

HeaderContainer.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			route: PropTypes.string
		})
	)
};

export default HeaderContainer;
