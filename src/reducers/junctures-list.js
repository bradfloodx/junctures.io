import {Map} from 'immutable';

import actions from '../actions/types';

const defaultState = Map();

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURES_LIST_VALUE:
			return state;
		case actions.JUNCTURES_LIST_VALUE_PENDING:
			return state;
		case actions.JUNCTURES_LIST_VALUE_FULFILLED:
			const junctures = {};
			action.payload.forEach((juncture) => {
				junctures[juncture.id] = juncture;
			});
			return state.merge( Map(junctures) );
		default:
			return state;
	}
};

export default juncturesListReducer;
