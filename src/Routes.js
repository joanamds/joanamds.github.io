import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
}

export default Routes;