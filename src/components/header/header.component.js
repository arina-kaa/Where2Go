import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

const Header = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand">Where2go</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/events" className="nav-link">Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/events/create" className="nav-link">Create Event</Link>
        </li>
        <li className="nav-item">
          <Link to="/user" className="nav-link">User</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
