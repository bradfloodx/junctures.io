import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header';
import Register from './register';
import SignIn from './sign-in';
import JuncturesCreate from './create';
import JuncturesList from './list';
import JuncturesEdit from './edit';
import {fetchJunctures} from '../actions/actions';
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
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
