import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.scss'

const Header = () => {
  let history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    history.push('/');
  };
  const loginRegLink = (
    <div className="form-inline my-2 my-lg-0">
      <Link to="/user/login" className="btn btn-sm align-middle btn-outline-secondary">Log In</Link>
      <Link to="/user/register" className="btn btn-sm align-middle btn-success">Sign Up</Link>
    </div>
  );
  const userLink = (
    <div className="form-inline my-2 my-lg-0">
      <Link to="/user/profile" className="btn btn-sm align-middle btn-outline-secondary">Profile</Link>
      <Link to="/user/logout" onClick={logout} className="btn btn-sm align-middle btn-success">Log Out</Link>
    </div>
  );

  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Where2go</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/event/list" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/event/create" className="nav-link">Create Event</Link>
          </li>
        </ul>
      </div>
      { localStorage.usertoken ? userLink : loginRegLink }
  </nav>
  )
};

export default Header;
