import {FETCH_JUNCTURES} from "../actions";
import {FETCH_JUNCTURES_FULFILLED} from "../actions";
import {FETCH_JUNCTURES_PENDING} from "../actions";

const defaultState = [];

const juncturesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_JUNCTURES:
			return state;
		case FETCH_JUNCTURES_PENDING:
			return state;
		case FETCH_JUNCTURES_FULFILLED:
			return action.payload.data;
		default:
			return state;
	}
};

export default juncturesReducer;
