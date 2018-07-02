import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import mainReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer,composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

export default store;

