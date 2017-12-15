import actions from '../actions/types';

const defaultState = [];

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURES_LIST_FETCH:
			return state;
		case actions.JUNCTURES_LIST_FETCH_PENDING:
			return state;
		case actions.JUNCTURES_LIST_FETCH_FULFILLED:
			return action.payload;
		default:
			return state;
	}
};

export default juncturesListReducer;
