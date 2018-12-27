import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { Router, Route, Switch } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { Provider } from 'react-redux';
import history from './history';
// import PublicRoutes from './routes'

import Signin from './components/signin';
import Signup from './components/signup';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path={'/'} component={App} />
				<Route exact path={'/signin'} component={Signin} />
				<Route exact path={'/signup'} component={Signup} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);


serviceWorker.unregister();