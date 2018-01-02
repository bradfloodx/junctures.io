import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/home';

const mapStateToProps = ({ user }) => ({
	userAuthenticated: user.authenticated
});

const HomeContainer = ({ userAuthenticated }) => (
	<Home userAuthenticated={userAuthenticated} />
);

export default connect(mapStateToProps)(HomeContainer);
