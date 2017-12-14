import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const HeaderWrapper = ({links, go}) => (
	<Header>
		<span>Junctures</span>
		<nav>
			<NavList>
				{links.map(({title, path}) => (
					<NavItem key={title} onClick={() => void go(path)}>
						<a>{title}</a>
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
	).isRequired,
	go: PropTypes.func
};

export default HeaderWrapper;
