import React from "react";
import { login } from "../../api/user";
import {useHistory} from "react-router-dom";

const UserLogin = (props) => {
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    login(e.target.elements)
      .then(res => {
        if (res) {
          history.push('/user/profile');
        }
      });
  };

  return(
    <div className="container">
      <h1>Войти в систему</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">Пароль</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" placeholder="Пароль" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-success">Войти</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default UserLogin;