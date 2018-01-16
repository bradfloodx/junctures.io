import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import routes from '../../routes';

const Profile = styled.div``;

const ProfileWrapper = ({email}) => (
	<Profile>
		<h1>Profile</h1>
		<p>Signed in as {email}</p>
		<p><Link to={routes.signOut.path}>Sign out</Link></p>
	</Profile>
);

ProfileWrapper.propTypes = {};

export default ProfileWrapper;
