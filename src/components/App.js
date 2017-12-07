import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './header/index';
import Authenticate from './authenticate/index';
import {JuncturesList, JunctureEditForm} from './junctures/index';

const handleOnSubmit = (event) => {
	event.preventDefault();
	console.log('~~~ event', event);
};

class App extends Component {
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

export default App;
