import axios from 'axios';

import {firebase} from './firebase';

export const FETCH_JUNCTURES = 'FETCH_JUNCTURES';
export const FETCH_JUNCTURES_PENDING = 'FETCH_JUNCTURES_PENDING';
export const FETCH_JUNCTURES_FULFILLED = 'FETCH_JUNCTURES_FULFILLED';

export const AUTH_ATTEMPT_SIGNIN = 'AUTH_ATTEMPT_SIGNIN';
export const AUTH_ATTEMPT_SIGNIN_SUCCESS = 'AUTH_ATTEMPT_SIGNIN_SUCCESS';
export const AUTH_ATTEMPT_SIGNIN_FAIL = 'AUTH_ATTEMPT_SIGNIN_FAIL';

export function fetchJunctures() {
	return {
		type: FETCH_JUNCTURES,
		payload: axios.get('/mock/junctures.json')
	}
}

export function signIn(username, password) {
	return (dispatch) => {
		dispatch({type: AUTH_ATTEMPT_SIGNIN});

		firebase.auth()
			.signInWithEmailAndPassword(username, password)
			.then((user) => {
				dispatch({
					type: 'AUTH_ATTEMPT_SIGNIN_SUCCESS',
					payload: {
						username: user.email,
						uid: user.uid
					}
				});
			})
			.catch(error => {
				this.setState({error: error.message});
				dispatch({
					type: 'AUTH_ATTEMPT_SIGNIN_FAIL',
					payload: error.message
				});
			});
	}
}
