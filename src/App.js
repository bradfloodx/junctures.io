import React, {Component} from 'react';
import Header from './Header';

const links = [
	{title: 'Sign In', path: '/sign-in'},
	{title: 'Register', path: '/register'}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header links={links}/>
			</div>
		);
	}
}

export default App;
