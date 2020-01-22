import React from 'react';
import { logout } from "../../api/user";
import { Link, useHistory } from 'react-router-dom';

import './style.scss'

const Header = () => {
  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push('/event/list');
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
      <Link to="/user/logout" onClick={handleLogout} className="btn btn-sm align-middle btn-success">Log Out</Link>
    </div>
  );

  return(
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/event/list" className="navbar-brand">Where2go</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            { localStorage.usertoken
                ? <li className="nav-item">
                    <Link to="/event/create" className="nav-link">Create Event</Link>
                </li>
                : null
            }
        </ul>
      </div>
      { localStorage.usertoken ? userLink : loginRegLink }
  </nav>
  )
};

export default Header;
