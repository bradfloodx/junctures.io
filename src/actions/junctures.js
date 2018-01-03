import actions from "./types";
import { database } from "../firebase";

export function watchJuncturesList() {
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

export function unwatchJuncturesList() {
	return (dispatch, getState) => {
		dispatch({ type: actions.JUNCTURES_LIST_UNWATCH });

		database
			.ref(`users/${getState().user.userId}/junctures`)
			.off();
	}
}

export function attemptCreateJuncture(juncture) {
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

export function fetchJunctureById(id) {
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

export function attemptEditJuncture(juncture, id) {
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

export function attemptDeleteJuncture(id) {
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
