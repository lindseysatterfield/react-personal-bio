import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Bio from './views/Bio';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';
import Technologies from './views/Technologies';

export default function Routes({ admin, projects, setProjects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}
        />
        <Route exact path='/bio'
        component={Bio}
        />
        <Route exact path='/technologies'
        component={Technologies}
        />
        <Route
          exact path='/projects'
          component={() => <Projects admin={admin} projects={projects} setProjects={setProjects} />}
        />
        <Route exact path='/contact-me'
        component={Contact}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};
