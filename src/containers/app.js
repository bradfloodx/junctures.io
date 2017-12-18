import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header';
import Register from './register';
import SignIn from './sign-in';
import SignOut from './sign-out';
import JuncturesCreate from './create';
import JuncturesList from './list';
import JuncturesEdit from './edit';
import NotFound from './404';
import {
	watchAuthState,
	fetchAndWatchJunctures,
	redirectTo
} from '../actions/actions';
import routes from '../routes';

const Home = () => (
	<p>Home</p>
);

const mapStateToProps = ({ router, user, common }) => ({
	router,
	redirectTo: common.redirectTo,
	userAuthenticated: user.authenticated
});

const mapDispatchToProps = (dispatch) => ({
	getJunctures: () => dispatch(fetchAndWatchJunctures()),
	watchAuthState: () => dispatch(watchAuthState()),
	redirect: (path) => dispatch(redirectTo(path))
});

class App extends Component {
	componentWillReceiveProps (nextProps) {
		if (nextProps.redirectTo) {
			this.props.redirect(nextProps.redirectTo);
		}

		if (nextProps.userAuthenticated && !this.props.userAuthenticated) {
			this.props.getJunctures();
		}
	}

	componentDidMount () {
		this.props.watchAuthState();
	}

	render () {
		return (
			<div>
				<Header/>
				{this.props.userAuthenticated ? (
					<Switch>
						<Route
							exact path={routes.home.path}
							component={Home}
						/>
						<Route
							exact path={routes.juncturesCreate.path}
							component={JuncturesCreate}
						/>
						<Route
							exact path={routes.junctures.path}
							component={JuncturesList}
						/>
						<Route
							exact path={routes.juncturesEdit.path}
							component={JuncturesEdit}
						/>
						<Route
							exact path={routes.signOut.path}
							component={SignOut}
						/>
						<Route
							component={NotFound}
						/>
					</Switch>
				) : (
					<Switch>
						<Route
							exact path={routes.home.path}
							component={Home}
						/>
						<Route
							exact path={routes.register.path}
							component={Register}
						/>
						<Route
							exact path={routes.signIn.path}
							component={SignIn}
						/>
						<Route
							component={NotFound}
						/>
					</Switch>
				)}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
