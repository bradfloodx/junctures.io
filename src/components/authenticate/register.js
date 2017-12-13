import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AuthForm from './form';

const mapStateToProps = (state) => {
	return {
		onSubmit: () => {}
	}
};

const RegisterWrapper = ({onSubmit}) => (
	<AuthForm
		title={'Register'}
		onSubmit={onSubmit}
	/>
);

RegisterWrapper.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(RegisterWrapper);
