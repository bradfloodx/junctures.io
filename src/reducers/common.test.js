import commonReducer from './common';
import actions from '../actions/types';

const defaultState = {
	redirectTo: null,
	appReady: false
};

describe('common reducer', () => {
	it('should return the initial state', () => {
		expect(commonReducer(undefined, {}))
			.toEqual(defaultState);
	});

	it('should return the default state', () => {
		expect(commonReducer(defaultState, {}))
			.toEqual(defaultState);
	});

	it(`should handle ${actions.GOTO}`, () => {
		const redirectAction = {
			type: actions.GOTO,
			payload: '/register',
		};

		expect(commonReducer(defaultState, redirectAction))
			.toEqual({
				...defaultState,
				redirectTo: '/register',
			});
	});

	it(`should handle ${actions.REDIRECTED}`, () => {
		const redirectAction = {
			type: actions.REDIRECTED,
		};

		expect(commonReducer({
			...defaultState,
			redirectTo: '/register',
		}, redirectAction))
			.toEqual({
				...defaultState,
				redirectTo: null,
			});
	});
});
