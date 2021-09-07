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
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>{'    '}</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((mission) => (
                    <tr key={mission.id}>
                      <th scope="row">{mission.mission_name}</th>
                      <td>{mission.description}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Active Member
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Join Mission
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;
