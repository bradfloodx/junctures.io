import actions from '../actions/types';

const defaultState = [];

const juncturesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.FETCH_JUNCTURES:
			return state;
		case actions.FETCH_JUNCTURES_PENDING:
			return state;
		case actions.FETCH_JUNCTURES_FULFILLED:
			return action.payload.data;
		default:
			return state;
	}
};

export default juncturesReducer;
