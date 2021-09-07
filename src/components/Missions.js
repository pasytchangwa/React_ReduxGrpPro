import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMissions, joinMission } from '../store/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const list  = useSelector((state) => state.missions.list);

  useEffect(() => {
    if (!list.length) dispatch(loadMissions());
  }, []);


  return (
    <div>
      <h1>Missions</h1>
      <div>
        <div className="grid border">
          <div className="text-left text-bold border">Mission</div>
          <div className="text-left text-bold border">Description</div>
          <div className="text-left text-bold">Status</div>
          <div className="text-left text-bold">Action</div>
        </div>
        {list.map((mission) => (
          <div key={mission.id} className="grid border">
            <div className="text-bold">{mission.mission_name}</div>
            <div className="pb border">{mission.description}</div>
            <div>
              {mission.join && (
                <div className="mbtn bg-success">Active Member</div>
              )}
              {!mission.join && (
                <div className="mbtn bg-dark">NOT A MEMBER</div>
              )}
            </div>
            <div>
              <button
                type="button"
                onClick={() => dispatch(joinMission({ id: mission.mission_id }))}
                className={
                  mission.join
                    ? 'btn outline-danger btn-sm'
                    : 'btn outline-secondary btn-sm'
                }
              >
                {mission.join ? 'Leave Mission' : 'Join Mission'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
