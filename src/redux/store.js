import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];

// const logger = store => next => action => {
//     console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// }

//const initialState = loadState();

const store = createStore(allReducers, [], applyMiddleware(...middlewares));

// store.subscribe( function () {
//   saveState(store.getState());
// })
sagaMiddleware.run(rootSaga);

export default store;
