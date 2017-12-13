import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header/index';
import Register from './authenticate/register';
import SignIn from './authenticate/sign-in';
import {JuncturesList, JunctureEditForm} from './junctures/index';

import {fetchJunctures} from '../actions';

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
					<Route exact path='/' component={JuncturesList} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/sign-in' component={SignIn} />
					<Route exact path='/juncture/:id/edit' component={JunctureEditForm} />
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
