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
      <div>
        <div className="flex">
          <div>Misson</div>
          <div>Description</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {list.map((mission) => (
          <div key={mission.id} className="flex m-2">
            <div>{mission.mission_name}</div>
            <div>{mission.description}</div>
            <div>
              <div className="badge bg-dark">not a memebr</div>
            </div>
            <div><button type="button" className="btn btn-sm btn-primary">Join mission</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
