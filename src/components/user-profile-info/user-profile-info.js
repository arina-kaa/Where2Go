import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';

const UserProfileInfo = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    setFirstName(decoded.first_name);
    setLastName(decoded.last_name);
    setEmail(decoded.email);
    setRole(decoded.role);
    }, []
  );

  return(
    <div className="container">
      <h1>Основная информация</h1>
      <div>
        <div className="form-group row">
          <h5 className="col-12 col-sm-4 col-md-3">Имя:</h5>
          <p className="col-12 col-sm-8 col-md-9">{firstName}</p>
        </div>
        <div className="form-group row">
          <h5 className="col-12 col-sm-4 col-md-3">Фамилия:</h5>
          <p className="col-12 col-sm-8 col-md-9">{lastName}</p>
        </div>
        <div className="form-group row">
          <h5 className="col-12 col-sm-4 col-md-3">Email:</h5>
          <p className="col-12 col-sm-8 col-md-9">{email}</p>
        </div>
        <div className="form-group row">
          <h5 className="col-12 col-sm-4 col-md-3">Роль:</h5>
          <p className="col-12 col-sm-8 col-md-9">{role}</p>
        </div>
      </div>
    </div>
  )
};

export default UserProfileInfo;