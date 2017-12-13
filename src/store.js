import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const history = createHistory();

const store = createStore(
	reducers,
	applyMiddleware(logger, thunk, promise(), routerMiddleware(history))
);

export {
	store,
	history
};
