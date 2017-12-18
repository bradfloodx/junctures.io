import {Component} from 'react';

import {store} from '../store';
import {signOut} from '../actions/actions';

class SignOut extends Component {
	componentDidMount() {
		store.dispatch(signOut());
	}

	render() {
		return null;
	}
}

export default SignOut;
