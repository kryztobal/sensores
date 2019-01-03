import React from "react";
import ReactDOM from "react-dom";
import history from "./history";
import PublicRoutes from "./routes";
import store from "./redux/store";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <PublicRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
