import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import store from './store';

render((
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
