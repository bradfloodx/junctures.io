import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home';
import Header from './header';
import Register from './register';
import SignIn from './sign-in';
import SignOut from './sign-out';
import JuncturesCreate from './create';
import JuncturesList from './list';
import JuncturesEdit from './edit';
import Loading from './loading';
import NotFound from './404';

import Main from '../components/main';
import routes from '../routes';
import { watchAuthState } from '../actions/common';
import { redirectTo } from '../actions/app';
import { watchJuncturesList, unwatchJuncturesList } from '../actions/junctures';

const mapStateToProps = ({ router, user, common }) => ({
	router,
	redirectTo: common.redirectTo,
	userAuthenticated: user.authenticated,
	appReady: common.appReady
});

const mapDispatchToProps = (dispatch) => ({
	watchJunctures: () => dispatch(watchJuncturesList()),
	unwatchJunctures: () => dispatch(unwatchJuncturesList()),
	watchAuthState: () => dispatch(watchAuthState()),
	redirect: (path) => dispatch(redirectTo(path))
});

class App extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.redirectTo) {
			this.props.redirect(nextProps.redirectTo);
		}

		if (nextProps.userAuthenticated && !this.props.userAuthenticated) {
			this.props.watchJunctures();
		}
		else if (!nextProps.userAuthenticated && this.props.userAuthenticated) {
			this.props.unwatchJunctures();
		}
	}

	componentDidMount() {
		this.props.watchAuthState();
	}

	render() {
		return (
			<div>
				<Header/>
				<Main>
					{this.props.appReady ? (
						<Switch>
							<Route
								exact path={routes.home.path}
								component={Home}
							/>
							<Route
								exact path={routes.juncturesCreate.path}
								component={this.props.userAuthenticated ? JuncturesCreate : SignIn}
							/>
							<Route
								exact path={routes.junctures.path}
								component={this.props.userAuthenticated ? JuncturesList : SignIn}
							/>
							<Route
								exact path={routes.juncturesEdit.path}
								component={this.props.userAuthenticated ? JuncturesEdit : SignIn}
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
								exact path={routes.signOut.path}
								component={SignOut}
							/>
							<Route
								component={NotFound}
							/>
						</Switch>
					) : (
						<Loading />
					)}
				</Main>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
