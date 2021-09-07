import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets.list);

  const filterRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      <h1>My Profile</h1>
      <div className="grid-2">
        <div>
          <h3>My missions</h3>
          <ul>
            <li>missions...</li>
          </ul>
        </div>
        <div>
          <h3>
            My rockets
            {' '}
            {rockets.length !== 0 && (
            <span>
              (
              {filterRockets.length}
              )
            </span>
            )}
          </h3>
          <ul className="list">
            {rockets.length === 0 && <p className="alert">Please, make reservation on Rockets page</p> }
            {filterRockets.map((rocket) => (
              <li className="text-dark text-bold p-1" key={rocket.id}>{rocket.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
