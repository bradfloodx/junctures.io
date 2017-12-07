import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderContainer = ({links}) => (
	<Header>
		<span>TaN</span>
		<nav>
			<ul>
				{links.map(({title, path}) => (
					<li key={title}>
						<a href={path}>{title}</a>
					</li>
				))}
			</ul>
		</nav>
	</Header>
);

HeaderContainer.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string
		})
	).isRequired
};

export default HeaderContainer;
