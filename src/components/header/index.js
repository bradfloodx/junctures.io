import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const mapStateToProps = (state) => {
	return {
		links: [
			{title: 'Home', path: '/'},
			{title: 'Register', path: '/register'},
			{title: 'Edit', path: '/juncture/1/edit'}
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

const HeaderWrapper = ({links, go}) => (
	<Header>
		<span>TaN</span>
		<nav>
			<NavList>
				{links.map(({title, path}) => (
					<li key={title} onClick={() => void go(path)}>
						<a>{title}</a>
					</li>
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
