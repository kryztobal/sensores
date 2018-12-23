import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Router, Route, Switch } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { Provider } from 'react-redux';
import history from './history';
// import PublicRoutes from './routes'

import Login from './components/signin'

ReactDOM.render(
    <Provider  store={store}>
        <Router history={history}>
            <Switch>
            <Route
            exact
            path={'/'}
            component={App}
            />
            <Route
            exact
            path={'/login'}
            component= {Login}
            />
            </Switch>
            </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// Dependencies


// Components
// import AppRoutes from './routes/routes.js';
// import registerServiceWorker from './registerServiceWorker';
// import store from './store';
// Assets
// import './index.css';

// import 'babel-polyfill';

// const BlockAvoider = withRouter(AppRoutes);

// render(
// 	<Provider store={store}>
// 			<Router history={history}>
// 				<BlockAvoider/>
// 			</Router>
// 	</Provider>, document.getElementById('root'));

// registerServiceWorker();