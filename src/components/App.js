import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './header/index';
import Authenticate from './authenticate/index';
import {JuncturesList, JunctureEditForm} from './junctures/index';

import {fetchJunctures} from '../actions';

const mapStateToProps = ({router}) => ({router});

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(fetchJunctures())
});

const handleOnSubmit = (event) => {
	event.preventDefault();
};

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
					<Route exact path='/register' render={() => <Authenticate onSubmit={handleOnSubmit}/>} />
					<Route exact path='/juncture/:id/edit' render={() => <JunctureEditForm onSubmit={handleOnSubmit}/>} />
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
