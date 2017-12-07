import React, {Component} from 'react';
import Header from './components/header';
import Authenticate from './components/authenticate';
import JuncturesList from './components/junctures';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
];

const junctures = [
	{name: 'Wedding', dateTime: 1234, id: 1},
	{name: 'DOB', dateTime: 12345, id: 2}
];

const handleOnSubmit = () => void console.log('handleOnSubmit');

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header links={links}/>
				<Authenticate onSubmit={handleOnSubmit}/>
				<JuncturesList junctures={junctures}/>
			</div>
		);
	}
}

export default App;
