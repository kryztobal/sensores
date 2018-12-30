import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

const store = createStore(allReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
