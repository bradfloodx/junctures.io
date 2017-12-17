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
	return (dispatch, getState) => {
		dispatch({type: actions.JUNCTURES_LIST_FETCH});

		database
			.ref(`users/${getState().user.userId}/junctures`)
			.once('value', (snapshot) => {
				const juncturesList = [];

				snapshot.forEach((childSnapshot) => {
					juncturesList.push({
						...childSnapshot.val(),
						id: childSnapshot.key
					});
				});

				if (juncturesList.length) {
					dispatch({
						type: actions.JUNCTURES_LIST_FETCH_FULFILLED,
						payload: juncturesList
					});
				}
			});
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

export function fetchJunctureById(id) {
		return (dispatch, getState) => {
		dispatch({type: actions.JUNCTURE_FETCH_BY_ID});

		database
			.ref(`users/${getState().user.userId}/junctures/${id}`)
			.once('value')
			.then((snapshot) =>
				dispatch({
					type: actions.JUNCTURE_FETCH_BY_ID_FULFILLED,
					payload: snapshot.val()
				})
			)
			.catch((error) =>
				dispatch({
					type: actions.JUNCTURE_FETCH_BY_ID_ERROR,
					payload: error.message
				})
			)
	}
}

export function attemptEditJuncture(juncture, id) {
	return (dispatch, getState) => {
		dispatch({type: actions.JUNCTURE_EDIT});

		database
			.ref(`users/${getState().user.userId}/junctures/${id}`)
			.set(juncture)
			.then(() => {
				dispatch({type: actions.JUNCTURE_EDIT_FULFILLED});
			})
			.catch((error) => {
				dispatch({
					type: actions.JUNCTURE_EDIT_ERROR,
					payload: error.message
				});
			});
	}
}
