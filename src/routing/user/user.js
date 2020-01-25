import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserRegister from '../../components/user-register/user-register';
import UserLogin from '../../components/user-login/user-login';
import UserProfile from '../../components/user-profile/user-profile';

const UserRouting = () => {
  return (
    <Switch>
      <Route exact path='/user/register' component={UserRegister}/>
      <Route exact path='/user/login' component={UserLogin}/>
      <Route exact path='/user/profile' component={UserProfile}/>
    </Switch>
  )
};

export default UserRouting;