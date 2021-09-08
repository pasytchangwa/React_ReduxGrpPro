import React from 'react';

const Profile = () => (
  <div>
    <h1>My Profile</h1>
    <div className="grid-2">
      <div>
        <h3>My missions</h3>
        <ul>
          <li>First mission</li>
        </ul>
      </div>
      <div>
        <h3>
          My rockets
        </h3>
        <ul className="list">
          <li className="text-dark text-bold p-1">First Rocket</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Profile;
