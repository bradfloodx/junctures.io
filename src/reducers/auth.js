import actions from '../actions/types';

const defaultState = {
	username: '',
	password: ''
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.AUTH_UPDATE_FIELD_VALUE:
			return {
				...state,
				[action.payload.key]:
					action.payload.value
			};
		case actions.AUTH_UNLOAD:
			return defaultState;
		default:
			return state;
	}
};

export default authReducer;
