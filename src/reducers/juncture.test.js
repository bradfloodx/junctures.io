import junctureReducer from './juncture';
// import actions from '../actions/types';

const defaultState = {
	name: '',
	date: '',
	time: ''
};

describe('juncture reducer', () => {
	it('should return the initial state', () => {
		expect(junctureReducer(undefined, {}))
			.toEqual(defaultState);
	});

	it('should return the default state', () => {
		expect(junctureReducer(defaultState, {}))
			.toEqual(defaultState);
	});

});
