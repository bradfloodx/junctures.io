import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from '../components/header';
import Register from './register';
import SignIn from './sign-in';
import JuncturesListContainer from './list';
import JuncturesCreateContainer from './create';
import JuncturesEditContainer from './edit';
import {fetchJunctures} from '../actions/index';
import routes from '../routes';

const Home = () => (
	<p>Home</p>
);

const mapStateToProps = ({router}) => ({router});

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(fetchJunctures())
});

class App extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return (
			<div>
				<Header/>
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
						exact path={routes.junctures.path}
						component={JuncturesListContainer}
					/>
					<Route
						exact path={routes.juncturesCreate.path}
						component={JuncturesCreateContainer}
					/>
					<Route
						exact path={routes.juncturesEdit.path}
						component={JuncturesEditContainer}
					/>
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
