import { push } from 'react-router-redux';

import { firebase, database } from '../firebase';
import actions from './types';
import { buildJuncturesEditRoute } from '../routes';

export function watchAuthState () {
	return (dispatch) => {
		firebase
			.auth()
			.onAuthStateChanged((user) => {
				if (user) {
					dispatch({
						type: actions.USER_AUTHENTICATED,
						payload: {
							username: user.email,
							userId: user.uid
						}
					});
				} else {
					dispatch({ type: actions.USER_NOT_AUTHENTICATED });
				}
			});
	}
}

export function watchJuncturesList () {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURES_LIST_WATCH });

		const junctures = database
			.ref(`users/${getState().user.userId}/junctures`);

		junctures.on('child_added', (snapshot) => {
			dispatch({
				type: actions.JUNCTURES_LIST_CHILD_ADDED,
				payload: {
					...snapshot.val(),
					id: snapshot.key
				}
			});
		});

		junctures.on('child_changed', (snapshot) => {
			dispatch({
				type: actions.JUNCTURES_LIST_CHILD_CHANGED,
				payload: {
					...snapshot.val(),
					id: snapshot.key
				}
			});
		});

		junctures.on('child_removed', (snapshot) => {
			dispatch({
				type: actions.JUNCTURES_LIST_CHILD_REMOVED,
				payload: snapshot.key
			});
		});
	}
}

export function attemptSignIn (username, password) {
	return (dispatch) => {
		dispatch({ type: actions.AUTH_ATTEMPT_SIGNIN });

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

export function attemptRegister (username, password) {
	return (dispatch) => {
		dispatch({ type: actions.AUTH_ATTEMPT_REGISTER });

		firebase.auth()
			.createUserWithEmailAndPassword(username, password)
			.then((user) => {
				database
					.ref(`users/${user.uid}`)
					.set({ username: user.email });

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

export function signOut () {
	return (dispatch) => {
		dispatch({ type: actions.AUTH_SIGN_OUT });

		firebase.auth()
			.signOut()
			.then(() => {
				dispatch({
					type: actions.AUTH_SIGN_OUT_FULFILLED
				});
			})
			.catch((error) => {
				dispatch({
					type: actions.AUTH_SIGN_OUT_FAILED,
					payload: error.message
				});
			});
	}
}

export function attemptCreateJuncture (juncture) {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURE_CREATE });

		database
			.ref(`users/${getState().user.userId}/junctures`)
			.push(juncture)
			.then(() => {
				dispatch({ type: actions.JUNCTURE_CREATE_FULFILLED });
			})
			.catch((error) => {
				dispatch({
					type: actions.JUNCTURE_CREATE_ERROR,
					payload: error.message
				});
			});
	}
}

export function redirectTo (path) {
	return (dispatch) => {
		dispatch(push(path));
		dispatch({ type: actions.REDIRECTED });
	}
}

export function goToJunctureEdit (id) {
	return (dispatch) =>
		dispatch({
			type: actions.GOTO,
			payload: buildJuncturesEditRoute(id)
		});
}

export function fetchJunctureById (id) {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURE_FETCH_BY_ID });

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

export function attemptEditJuncture (juncture, id) {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURE_EDIT });

		database
			.ref(`users/${getState().user.userId}/junctures/${id}`)
			.set(juncture)
			.then(() => {
				dispatch({ type: actions.JUNCTURE_EDIT_FULFILLED });
			})
			.catch((error) => {
				dispatch({
					type: actions.JUNCTURE_EDIT_ERROR,
					payload: error.message
				});
			});
	}
}

export function attemptDeleteJuncture (id) {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURE_DELETE });

		database
			.ref(`users/${getState().user.userId}/junctures/${id}`)
			.remove()
			.then(() => {
				dispatch({ type: actions.JUNCTURE_DELETE_FULFILLED });
			})
			.catch((error) => {
				dispatch({
					type: actions.JUNCTURE_DELETE_ERROR,
					payload: error.message
				});
			});
	}
}
