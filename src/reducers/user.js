import actions from '../actions/types';

const defaultState = {
	username: '',
	userId: 0,
	authenticated: false
};

const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.USER_AUTHENTICATED:
			return {
				...action.payload,
				authenticated: true
			};
		case actions.USER_NOT_AUTHENTICATED:
		case actions.AUTH_SIGN_OUT_FULFILLED:
			return defaultState;
		default:
			return state;
	}
};

export default userReducer;
