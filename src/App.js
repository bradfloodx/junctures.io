import React, {Component} from 'react';
import Header from './components/header';
import Authenticate from './components/authenticate';
import {JuncturesList, JunctureEditForm} from './components/junctures';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
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
			<div className="App">
				<Header links={links}/>
				<Authenticate onSubmit={handleOnSubmit}/>
				<JuncturesList junctures={junctures}/>
				<JunctureEditForm onSubmit={handleOnSubmit}/>
			</div>
		);
	}
}

export default App;
