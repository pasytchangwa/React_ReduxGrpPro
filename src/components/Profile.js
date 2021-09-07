import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets.list);
  const missions = useSelector((state) => state.missions.list);

  const filterRockets = rockets.filter((rocket) => rocket.reserved);
  const filterMissions = missions.filter((mission) => mission.join);
  return (
    <div>
      <h1>My Profile</h1>
      <div className="grid-2">
        <div>
          <h3>
            My missions{' '}
            {missions.length !== 0 && <span>({filterMissions.length})</span>}
          </h3>
          <ul className="list">
            {missions.length === 0 && (
              <p className="alert">Please, join a mission on Missions page</p>
            )}
            {filterMissions.map((mission) => (
              <li className="text-dark text-bold p-1" key={mission.id}>
                {mission.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            My rockets{' '}
            {rockets.length !== 0 && <span>({filterRockets.length})</span>}
          </h3>
          <ul className="list">
            {rockets.length === 0 && (
              <p className="alert">Please, make reservation on Rockets page</p>
            )}
            {filterRockets.map((rocket) => (
              <li className="text-dark text-bold p-1" key={rocket.id}>
                {rocket.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
