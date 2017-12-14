import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import junctures from './junctures';
import auth from './auth';

export default combineReducers({
	auth,
	junctures,
	router: routerReducer
});
