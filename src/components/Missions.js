import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions } from '../store/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {list.map((mission) => (
          <li key={mission.id}>
            <div className="card">
              <h3>{mission.mission_name}</h3>
              <p>{mission.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
