import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <a to="/">Rockets</a>
      </li>
      <li>
        <a to="/missions">Missions</a>
      </li>
      <li>
        <a to="/myprofile">My Profile</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;