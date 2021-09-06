import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = ({ logo, title }) => (
  <nav className="navbar">
    <h1>
      <img src={logo} alt={title} width="4" height="4" />
      {' '}
      {title}
    </h1>
    <ul>
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Missions</Link>
      </li>
      <li>
        <Link to="/myprofile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  logo,
  title: "Space Traveler's hub",
};

Navbar.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default Navbar;
