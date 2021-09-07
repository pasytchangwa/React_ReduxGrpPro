import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets, reserveRocket } from '../store/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(loadRockets());
  }, []);

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {list.map((rocket) => (
          <li key={rocket.id}>
            <div className="card flex">
              <img
                className="round-img"
                style={{ width: '220px' }}
                src={rocket.image}
                alt={rocket.name}
              />
              <div>
                <div className="card-head">
                  {rocket.reserved && <div className="badge bg-success">Reserved</div>}
                  <div className="large">{rocket.name}</div>
                </div>
                <p className="text-dark my-1">
                  {rocket.description}
                </p>
                <button onClick={() => dispatch(reserveRocket({ id: rocket.id }))} type="button" className="btn btn-primary btn-sm">{!rocket.resolved ? 'Reserve Rocket' : 'Cancel'}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
