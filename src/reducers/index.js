import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import common from './common';
import auth from './auth';
import user from './user';
import juncture from './juncture';
import juncturesList from './junctures-list';

export default combineReducers({
	common,
	auth,
	user,
	juncture,
	juncturesList,
	router: routerReducer
});
