import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

const history = createHistory();

const store = createStore(
	reducers,
	applyMiddleware(logger, ReduxThunk, routerMiddleware(history))
);

export {
	store,
	history
};
