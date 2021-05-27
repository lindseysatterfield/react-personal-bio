import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bio from './views/Bio';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';
import Technologies from './views/Technologies';
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
        <Route
          exact path='/bio'
          component={Bio}
        />
        <Route
          exact path='/technologies'
          component={Technologies}
        />
        <Route
          exact path='/projects'
          component={Projects}
        />
        <Route
          exact path='/contact-me'
          component={Contact}
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
