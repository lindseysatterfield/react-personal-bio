import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import AuthedAdmin from './views/AuthedAdmin';
import Admin from './views/Admin';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} user={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};
export default function Routes({ admin }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={Home}
        />
        <PrivateRoute
          exact path='/admin'
          admin={admin}
          component={() => <Admin admin={admin} />}
        />
        <Route
          exact path='/authedAdmin'
          admin={admin}
          component={() => <AuthedAdmin admin={admin} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any
};
