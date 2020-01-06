import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

const Header = () => (
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
    <div className="form-inline my-2 my-lg-0">
      <Link to="/user/login" className="btn btn-sm align-middle btn-outline-secondary">Sign In</Link>
      <Link to="/user/create" className="btn btn-sm align-middle btn-success">Sign Up</Link>
    </div>
  </nav>
);

export default Header;
