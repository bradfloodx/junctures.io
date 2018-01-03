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
