import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Header from '../components/header'
import routes from '../routes';

const mapStateToProps = () => {
	return {
		links: [
			routes.home,
			routes.register,
			routes.signIn,
			routes.juncturesCreate,
			routes.junctures,
			routes.juncturesEdit
		]
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		go: (path) => dispatch(push(path))
	}
};

const HeaderContainer = (props) => (
	<Header
		{...props}
	/>
);

HeaderContainer.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string
		})
	).isRequired,
	go: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
