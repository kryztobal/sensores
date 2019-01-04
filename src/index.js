import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import PublicRoutes from "./routes";
import store from "./redux/store";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import * as utils from './settings/utils'
import authActions from './redux/Signin/actions'
const token = utils.getToken()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PublicRoutes token={token}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

store.dispatch(authActions.authCheck())

serviceWorker.unregister();
