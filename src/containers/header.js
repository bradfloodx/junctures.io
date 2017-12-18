import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/header'
import routes from '../routes';

const mapStateToProps = ({ user }) => ({
	userAuthenticated: user.authenticated
});

const HeaderContainer = ({ userAuthenticated }) => {
	const links = [ routes.home ];

	if (userAuthenticated) {
		links.push(routes.juncturesCreate, routes.junctures);
	} else {
		links.push(routes.register, routes.signIn);
	}

	return (
		<Header
			links={links}
		/>
	)
};

HeaderContainer.propTypes = {
	go: PropTypes.func,
	userAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(HeaderContainer);
