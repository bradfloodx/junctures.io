import {Map} from 'immutable';

import actions from '../actions/types';

const defaultState = Map();

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURESw_LIST_FETCH:
			return state;
		case actions.JUNCTURES_LIST_FETCH_PENDING:
			return state;
		case actions.JUNCTURES_LIST_FETCH_FULFILLED:
			const junctures = {};
			action.payload.forEach((juncture) => {
				junctures[juncture.id] = juncture;
			});
			return Map(junctures);
		default:
			return state;
	}
};

export default juncturesListReducer;
