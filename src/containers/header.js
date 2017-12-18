import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Header from '../components/header'
import routes from '../routes';

const mapStateToProps = ({ user }) => ({
	userAuthenticated: user.authenticated
});

const mapDispatchToProps = (dispatch) => {
	return {
		go: (path) => dispatch(push(path))
	}
};

const HeaderContainer = ({ go, userAuthenticated }) => {
	const links = [ routes.home ];

	if (userAuthenticated) {
		links.push(routes.juncturesCreate, routes.junctures, routes.juncturesEdit);
	} else {
		links.push(routes.register, routes.signIn);
	}

	return (
		<Header
			links={links}
			go={go}
		/>
	)
};

HeaderContainer.propTypes = {
	go: PropTypes.func,
	userAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
