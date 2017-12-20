import actions from '../actions/types';

const defaultState = {
	name: '',
	date: '2019-12-01',
	time: '08:00'
};

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURE_UPDATE_FIELD:
			return {
				...state,
				[action.payload.key]:
					action.payload.value
			};
		case actions.JUNCTURE_UPDATE_UNLOAD:
			return defaultState;
		case actions.JUNCTURE_FETCH_BY_ID_FULFILLED:
			return {...action.payload, fetched: true};
		default:
			return state;
	}
};

export default juncturesListReducer;
