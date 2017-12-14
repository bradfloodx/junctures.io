import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const history = createHistory();
const middleware = applyMiddleware(thunk, promise(), routerMiddleware(history), logger);

const store = createStore(reducers, middleware);

export {
	store,
	history
};
