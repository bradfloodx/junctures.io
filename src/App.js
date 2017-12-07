import React, {Component} from 'react';
import Header from './Header';
import Authenticate from './Authenticate';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
];

const handleOnSubmit = () => void console.log('handleOnSubmit');

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header links={links}/>
				<Authenticate onSubmit={handleOnSubmit}/>
			</div>
		);
	}
}

export default App;
