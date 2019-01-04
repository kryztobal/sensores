import React from "react";
import { Route, Redirect } from "react-router-dom";
import Signin from '../components/signin'
import Signup from '../components/signup'
import App from '../components/App'

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PublicRoutes = ({ token }) => {
  return (
      <div>
        <Route
          exact
          path={"/register"}
          component={Signup}
        />
        <Route
          exact
          path={"/login"}
          component={Signin}
        />

        <RestrictedRoute
          path="/"
          component={App}
          isLoggedIn={false}
        />
      </div>
  );
};

export default PublicRoutes;
