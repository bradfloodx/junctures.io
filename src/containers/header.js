import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/header/header'
import routes from '../routes';
import { goTo } from '../actions/common';

const mapStateToProps = ({ user, common }) => ({
	userAuthenticated: user.authenticated,
	ready: common.appReady
});

const mapDistpatchToProps = (dispatch) => ({
	go: (path) => dispatch(goTo(path))
});

const HeaderContainer = ({ userAuthenticated, ready, go }) => {
	const links = [];

	if (userAuthenticated) {
		links.push(routes.juncturesCreate, routes.junctures);
	} else {
		links.push(routes.register, routes.signIn);
	}

	return (
		<Header
			navLinks={ready ? links : []}
			go={go}
			profileLink={userAuthenticated ? routes.profile : null}
		/>
	)
};

HeaderContainer.propTypes = {
	go: PropTypes.func,
	userAuthenticated: PropTypes.bool,
	ready: PropTypes.bool,
};

export default connect(mapStateToProps, mapDistpatchToProps)(HeaderContainer);
