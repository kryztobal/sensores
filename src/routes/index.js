import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from '../components/App'
import Login from '../components/signin'

// import asyncComponent from './helpers/AsyncFunc';

// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
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
        {/*<RestrictedRoute
          path="/driver"
          component={App}
          isLoggedIn={isLoggedIn}
        />*/}
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes