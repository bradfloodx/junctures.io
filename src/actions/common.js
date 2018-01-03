import { firebase, database } from '../firebase';
import actions from './types';
import { buildJuncturesEditRoute } from '../routes';

export function watchAuthState() {
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

export function attemptSignIn(username, password) {
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

export function attemptRegister(username, password) {
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

export function signOut() {
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

export function goTo(path) {
	return (dispatch) =>
		dispatch({
			type: actions.GOTO,
			payload: path
		});
}

export function goToJunctureEdit(id) {
	return goTo(buildJuncturesEditRoute(id));
}
