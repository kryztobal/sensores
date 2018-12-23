import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import {loadState, saveState} from './utils.js';
import allReducers from './reducers';

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

//const initialState = loadState();

const store = createStore(allReducers, [], applyMiddleware(thunk, logger));

// store.subscribe( function () {
//   saveState(store.getState());
// })

export default store;

