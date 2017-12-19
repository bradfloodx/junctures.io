import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { store, history } from './store';
import App from './containers/app';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

// TODO
// - Style (React UI Material Design?)
// - Tests! (see redux docs + ...)
// - Error messages and feedback
// - Home page
// - Cordova App (build, icons + launch screens, store pages and screenshots, submit)
// - Refactor actions/actions.js
// - Flow typings
// - More Immutable
// -

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<MuiThemeProvider theme={theme}>
				<App/>
			</MuiThemeProvider>
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
