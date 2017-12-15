import actions from '../actions/types';

const defaultState = {
	name: '',
	date: '',
	time: '',
	id: 0
};

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURE_UPDATE_FIELD:
			return {
				...state,
				[action.payload.key]:
					action.payload.value
			};
		default:
			return state;
	}
};

export default juncturesListReducer;
