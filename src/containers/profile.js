import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Profile from '../components/profile/profile';

const mapStateToProps = ({user}) => ({email: user.username});

const ProfileWrapper = ({email}) => (
	<Profile
		email={email}
	/>
);

ProfileWrapper.propTypes = {
	email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ProfileWrapper);
