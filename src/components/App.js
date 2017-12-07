import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './header/index';
import Authenticate from './authenticate/index';
import {JuncturesList, JunctureEditForm} from './junctures/index';

const links = [
	{title: 'Home', path: '/'},
	{title: 'Register', path: '/register'},
	{title: 'Edit', path: '/juncture/1/edit'}
];

const junctures = [
	{name: 'Wedding', dateTime: 1234, id: 1},
	{name: 'DOB', dateTime: 12345, id: 2}
];

const handleOnSubmit = (event) => {
	event.preventDefault();
	console.log('~~~ event', event);
};

class App extends Component {
	render() {
		return (
			<div>
				<Header links={links}/>
				<Switch>
					<Route exact path='/' render={() => <JuncturesList junctures={junctures}/>} />
					<Route exact path='/register' render={() => <Authenticate onSubmit={handleOnSubmit}/>} />
					<Route exact path='/juncture/:id/edit' render={() => <JunctureEditForm onSubmit={handleOnSubmit}/>} />
				</Switch>
			</div>
		);
	}
}

export default App;
