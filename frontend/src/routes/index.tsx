import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from '../components/Template';
import Home from '../pages/Home';
import Users from '../pages/Users';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Template>
        <Route path="/" exact component={Home} />   
        <Route path="/users" exact component={Users} />   
      </Template>
    </Switch>
  </>
)

export default Routes;
