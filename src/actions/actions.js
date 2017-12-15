import axios from 'axios';

import {firebase, database} from '../firebase';
import actions from './types';

export function watchAuthState() {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch({
					type: actions.USER_AUTHENTICATED,
					payload: {
						username: user.email,
						userId: user.uid
					}
				});
			} else {
				dispatch({type: actions.USER_NOT_AUTHENTICATED});
			}
		});
	}
}

export function fetchJunctures() {
	return {
		type: actions.JUNCTURES_LIST_FETCH,
		payload: axios.get('/mock/juncturesList.json')
	}
}

export function attemptSignIn(username, password) {
	return (dispatch) => {
		dispatch({type: actions.AUTH_ATTEMPT_SIGNIN});

		firebase.auth()
			.signInWithEmailAndPassword(username, password)
			.then((user) => {
				dispatch({
					type: actions.AUTH_ATTEMPT_SIGNIN_FULFILLED
				});
				dispatch({
					type: actions.USER_AUTHENTICATED,
					payload: {
						username: user.email,
						userId: user.uid
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actions.AUTH_ATTEMPT_SIGNIN_ERROR,
					payload: error.message
				});
			});
	}
}

export function attemptRegister(username, password) {
	return (dispatch) => {
		dispatch({type: actions.AUTH_ATTEMPT_REGISTER});

		firebase.auth()
			.createUserWithEmailAndPassword(username, password)
			.then((user) => {
				database
					.ref(`users/${user.uid}`)
					.set({username: user.email});

				dispatch({
					type: actions.AUTH_ATTEMPT_REGISTER_FULFILLED,
					payload: {
						username: user.email,
						uid: user.uid
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actions.AUTH_ATTEMPT_REGISTER_ERROR,
					payload: error.message
				});
			});
	}
}

export function attemptCreateJuncture(juncture) {
	return (dispatch, getState) => {
		dispatch({type: actions.JUNCTURE_CREATE});

		database
			.ref(`users/${getState().user.userId}/junctures`)
			.push(juncture)
			.then(() => {
				dispatch({type: actions.JUNCTURE_CREATE_FULFILLED});
			})
			.catch((error) => {
				dispatch({
					type: actions.JUNCTURE_CREATE_ERROR,
					payload: error.message
				});
			});
	}
}

export function attemptEditJuncture(juncture) {
	return (dispatch) => {
		console.log('~~~ juncture', juncture);
		dispatch({type: actions.JUNCTURE_EDIT});
	}
}
