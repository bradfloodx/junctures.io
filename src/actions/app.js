import actions from "./types";
import { push } from "react-router-redux";

// NOTE: this should only be called by app.js container
export function redirectTo(path) {
	return (dispatch) => {
		dispatch(push(path));
		dispatch({ type: actions.REDIRECTED });
	}
}
