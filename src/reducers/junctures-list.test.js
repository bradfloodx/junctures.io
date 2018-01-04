import {Map} from 'immutable';

import juncturesListReducer from './junctures-list';
// import actions from '../actions/types';

const defaultState = Map();

describe('juncture reducer', () => {
	it('should return the initial state', () => {
		expect(juncturesListReducer(undefined, {}))
			.toEqual(defaultState);
	});

	it('should return the default state', () => {
		expect(juncturesListReducer(defaultState, {}))
			.toEqual(defaultState);
	});

});
