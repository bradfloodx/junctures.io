import userReducer, { defaultState } from "./user";
import actions from '../actions/types';

describe('user reducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {}))
			.toEqual(defaultState);
	});

	it('should return the default state', () => {
		expect(userReducer(defaultState, {}))
			.toEqual(defaultState);
	});

	it('should return modified state', () => {
		const modifiedState = new defaultState({username: 'foo'});

		expect(userReducer(modifiedState, {}))
			.toEqual(modifiedState);
	});

	it(`should handle ${actions.USER_AUTHENTICATED}`, () => {
		const action = {
			type: actions.USER_AUTHENTICATED,
			payload: {
				username: 'bradley.flood@gmail.com',
				userId: 'abcd'
			}
		};
		expect(userReducer(defaultState, action))
			.toEqual(new defaultState({
				...action.payload,
				authenticated: true
			}));
	});

	it(`should handle ${actions.USER_NOT_AUTHENTICATED}`, () => {
		expect(userReducer(defaultState, {type: actions.USER_NOT_AUTHENTICATED}))
			.toEqual(defaultState);
	});

	it(`should handle ${actions.AUTH_SIGN_OUT_FULFILLED}`, () => {
		expect(userReducer(defaultState, {type: actions.AUTH_SIGN_OUT_FULFILLED}))
			.toEqual(defaultState);
	});
});
