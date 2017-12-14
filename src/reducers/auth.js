import actions from '../actions/types';

const defaultState = {
	username: '',
	password: ''
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.UPDATE_FIELD_VALUE_AUTH:
			return {
				...state,
				[action.payload.key]:
					action.payload.value
			};

		case actions.AUTH_ATTEMPT_REGISTER:
			return state;

		case actions.AUTH_ATTEMPT_REGISTER_FULFILLED:
			return state;

		case actions.AUTH_ATTEMPT_REGISTER_ERROR:
			return state;

		case actions.AUTH_ATTEMPT_SIGNIN:
			return state;

		case actions.AUTH_ATTEMPT_SIGNIN_FULFILLED:
			return state;

		case actions.AUTH_ATTEMPT_SIGNIN_ERROR:
			return state;

		default:
			return state;
	}
};

export default authReducer;
