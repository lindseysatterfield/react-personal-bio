import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from './views/Bio';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';
import Technologies from './views/Technologies';

export default function Routes() {
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
        <Route exact path='/projects'
        component={Projects}
        />
        <Route exact path='/contact-me'
        component={Contact}
        />
      </Switch>
    </div>
  );
}
