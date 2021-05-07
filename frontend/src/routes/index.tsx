import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Template from '../components/Template';
import Home from '../pages/Home';
import UserList from '../pages/users/List';
import UserForm from '../pages/users/Form';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Template>
        <Route path="/" exact component={Home} />   
        <Route path="/users" exact component={UserList} />   
        <Route path="/users/create" exact component={UserForm} />   
        <Route path="/users/edit/:id" exact component={UserForm} />   
      </Template>
    </Switch>
  </>
)

export default Routes;
