import actions from '../actions/types';

const defaultState = {
	collection: [],
	edit: {}
};

const juncturesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURES_FETCH:
			return state;
		case actions.JUNCTURES_FETCH_PENDING:
			return state;
		case actions.JUNCTURES_FETCH_FULFILLED:
			return {
				...state,
				collection: action.payload.data
			};
		default:
			return state;
	}
};

export default juncturesReducer;
