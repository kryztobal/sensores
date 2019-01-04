import React from "react";
import { Route, Redirect } from "react-router-dom";
import Signin from '../components/signin'
import Signup from '../components/signup'
import App from '../components/App'
import { connect } from "react-redux";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to='/login'
        />
      )
    }
  />
);

const PublicRoutes = ({ isLoggedIn }) => {
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
          isLoggedIn={isLoggedIn}
        />
      </div>
  );
};

export default connect(state => ({
  isLoggedIn: state.Signin.token !== null
}))(PublicRoutes);