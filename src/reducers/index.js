import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const defaultUserState = {
	user: 'bradley.flood@gmail.com'
};

const userReducer = (state = defaultUserState) => {
	return state;
};

const defaultJuncturesState = [
	{
		name: 'Holiday',
		dateTime: 99,
		id: 0
	}
];

const juncturesReducer = (state = defaultJuncturesState) => {
	return state;
};

export default combineReducers({
	user: userReducer,
	junctures: juncturesReducer,
	router: routerReducer
});
