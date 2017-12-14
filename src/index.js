import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

import {store, history} from './store';
import App from './containers/app';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
