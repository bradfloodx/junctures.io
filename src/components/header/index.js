import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import routes from '../../routes';

const mapStateToProps = () => {
	return {
		links: [
			routes.home,
			routes.register,
			routes.signIn,
			routes.junctures,
			routes.juncturesCreate,
			routes.juncturesEdit
		]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		go: (path) => dispatch(push(path))
	}
};

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

export {HeaderWrapper as Header};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderWrapper);
