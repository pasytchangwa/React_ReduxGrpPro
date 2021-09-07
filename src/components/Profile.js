import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets.list);

  const filterRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      <h1>My Profile</h1>
      <div className="flex">
        <div>
          <h3>My missions</h3>
          <ul>
            {filterRockets.map((mission) => (
              <li key={mission.id}>{mission.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>My rockets</h3>
          <ul>
            {filterRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
