import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Users from '../pages/Users';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />   
      <Route path="/users" exact component={Users} />   
    </Switch>
  </>
)

export default Routes;
