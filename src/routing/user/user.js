import React from 'react';
import { Switch, Route } from "react-router-dom";
import UserCreate from "../../containers/user-create/user-create";
import UserLogin from "../../containers/user-login/user-login";

const UserRouting = () => (
  <Switch>
    <Route exact path='/user/create' component={UserCreate}/>
    <Route exact path='/user/login' component={UserLogin}/>
  </Switch>
);

export default UserRouting;