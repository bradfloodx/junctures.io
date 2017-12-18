import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavList = styled.ul`
	margin: 0;
	list-style: none;
	display: flex;
`;

const NavItem = styled.li`
	margin: 10px 15px;
	
	&:hover {
		text-decoration: underline;
	}
`;

const HeaderWrapper = ({links}) => (
	<Header>
		<Link to="/">Junctures</Link>
		<nav>
			<NavList>
				{links.map(({title, path}) => (
					<NavItem key={title}>
						<Link to={path}>{title}</Link>
					</NavItem>
				))}
			</NavList>
		</nav>
	</Header>
);

HeaderWrapper.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string
		})
	).isRequired
};

export default HeaderWrapper;
