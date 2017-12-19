import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

import {store, history} from './store';
import App from './containers/app';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// TODO
// - Flow typings
// - More Immutable
// - Style (React UI Material Design?)
// - Error messages and feedback
// - Refactor actions/actions.js
// - Home page
// - Cordova App (build, icons + launch screens, store pages and screenshots, submit)
// -

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
