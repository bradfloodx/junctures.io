import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import auth from './auth';
import user from './user';
import juncture from './juncture';
import juncturesList from './junctures-list';

export default combineReducers({
	auth,
	user,
	juncture,
	juncturesList,
	router: routerReducer
});
