import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as sagas from './sagas';
import mainReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mainReducer,composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));

Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));

export default store;

