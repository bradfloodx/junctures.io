import userReducer from './user';
import actions from '../actions/types';

const defaultState = {
	username: '',
	userId: 0,
	authenticated: false
};

describe('user reducer', () => {
	it('should return the initial state', () => {
		expect(userReducer(undefined, {}))
			.toEqual(defaultState);
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
			.toEqual({
				...action.payload,
				authenticated: true
			});
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
