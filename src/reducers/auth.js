const defaultState = {
	username: '',
	password: ''
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'UPDATE_FIELD_VALUE_AUTH':
			return { ...state, [action.payload.key]: action.payload.value};
		default:
			return state;
	}
};

export default authReducer;
