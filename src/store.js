import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

export default createStore(reducer, applyMiddleware(logger, ReduxThunk));
