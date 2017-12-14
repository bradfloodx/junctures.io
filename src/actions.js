import axios from 'axios';

import {firebase, database} from './firebase';

export const FETCH_JUNCTURES = 'FETCH_JUNCTURES';
export const FETCH_JUNCTURES_PENDING = 'FETCH_JUNCTURES_PENDING';
export const FETCH_JUNCTURES_FULFILLED = 'FETCH_JUNCTURES_FULFILLED';

export const AUTH_ATTEMPT_SIGNIN = 'AUTH_ATTEMPT_SIGNIN';
export const AUTH_ATTEMPT_SIGNIN_FULFILLED = 'AUTH_ATTEMPT_SIGNIN_FULFILLED';
export const AUTH_ATTEMPT_SIGNIN_ERROR = 'AUTH_ATTEMPT_SIGNIN_ERROR';

export const AUTH_ATTEMPT_REGISTER = 'AUTH_ATTEMPT_REGISTER';
export const AUTH_ATTEMPT_REGISTER_FULFILLED = 'AUTH_ATTEMPT_REGISTER_FULFILLED';
export const AUTH_ATTEMPT_REGISTER_ERROR = 'AUTH_ATTEMPT_REGISTER_ERROR';

export function fetchJunctures() {
	return {
		type: FETCH_JUNCTURES,
		payload: axios.get('/mock/junctures.json')
	}
}

export function attemptSignIn(username, password) {
	return (dispatch) => {
		dispatch({type: AUTH_ATTEMPT_SIGNIN});

		firebase.auth()
			.signInWithEmailAndPassword(username, password)
			.then((user) => {
				dispatch({
					type: AUTH_ATTEMPT_SIGNIN_FULFILLED,
					payload: {
						username: user.email,
						uid: user.uid
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: AUTH_ATTEMPT_SIGNIN_ERROR,
					payload: error.message
				});
			});
	}
}

export function attemptRegister(username, password) {
	return (dispatch) => {
		dispatch({type: AUTH_ATTEMPT_REGISTER});

		firebase.auth()
			.createUserWithEmailAndPassword(username, password)
			.then((user) => {
				database
					.ref(`users/${user.uid}`)
					.set({username: user.email});

				dispatch({
					type: AUTH_ATTEMPT_REGISTER_FULFILLED,
					payload: {
						username: user.email,
						uid: user.uid
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: AUTH_ATTEMPT_REGISTER_ERROR,
					payload: error.message
				});
			});
	}
}
