import authReducer from './auth';
import actions from '../actions/types';
import userReducer from "./user";

const defaultState = {
	username: '',
	password: ''
};

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(authReducer(undefined, {}))
			.toEqual(defaultState);
	});

	it('should return the default state', () => {
		expect(authReducer(defaultState, {}))
			.toEqual(defaultState);
	});

	it('should return modified state', () => {
		const modifiedState = new defaultState({username: 'foo'});

		expect(userReducer(modifiedState, {}))
			.toEqual(modifiedState);
	});

	it(`should handle ${actions.AUTH_UPDATE_FIELD_VALUE}`, () => {
		const usernameAction = {
			type: actions.AUTH_UPDATE_FIELD_VALUE,
			payload: {key: 'username', value: 'brad'}
		};

		const passwordAction = {
			type: actions.AUTH_UPDATE_FIELD_VALUE,
			payload: {key: 'password', value: 'secret'}
		};

		const usernameState = authReducer(defaultState, usernameAction);

		expect(usernameState)
			.toEqual({
				username: 'brad',
				password: ''
			});

		const passwordState = authReducer(defaultState, passwordAction);

		expect(passwordState)
			.toEqual({
				username: '',
				password: 'secret'
			});

		const passwordAndUsernameState = authReducer(usernameState, passwordAction);

		expect(passwordAndUsernameState)
			.toEqual({
				username: 'brad',
				password: 'secret'
			});
	});

	it(`should handle ${actions.AUTH_UNLOAD}`, () => {
		expect(authReducer(defaultState, {type: actions.AUTH_UNLOAD}))
			.toEqual(defaultState);
	});
});
