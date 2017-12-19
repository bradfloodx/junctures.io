import {Map} from 'immutable';

import actions from '../actions/types';

const defaultState = Map();

const juncturesListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case actions.JUNCTURES_LIST_CHILD_ADDED:
		case actions.JUNCTURES_LIST_CHILD_CHANGED:
			return state.set(action.payload.id, action.payload);
		case actions.JUNCTURES_LIST_CHILD_REMOVED:
			return state.delete(action.payload);
		default:
			return state;
	}
};

export default juncturesListReducer;
