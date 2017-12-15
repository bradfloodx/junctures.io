import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import juncture from './juncture';
import juncturesList from './junctures-list';
import auth from './auth';

export default combineReducers({
	auth,
	juncture,
	juncturesList,
	router: routerReducer
});
