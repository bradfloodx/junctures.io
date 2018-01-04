import { Record } from 'immutable';
import actions from '../actions/types';

export const defaultState = Record({
	username: '',
	userId: '',
	authenticated: false
});

export default function userReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.USER_AUTHENTICATED:
			return new state({
				...action.payload,
				authenticated: true
			});
		case actions.USER_NOT_AUTHENTICATED:
		case actions.AUTH_SIGN_OUT_FULFILLED:
			return defaultState;
	}

	return state;
};
