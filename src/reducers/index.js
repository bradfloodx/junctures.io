import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const userReducer = (state = {user: 'bradley.flood@gmail.com'}) => {
	return state;
};

const juncturesReducer = (state = [{name: 'Holiday', dateTime: 99, id: 0}]) => {
	return state;
};

export default combineReducers({
	user: userReducer,
	junctures: juncturesReducer,
	router: routerReducer
});
