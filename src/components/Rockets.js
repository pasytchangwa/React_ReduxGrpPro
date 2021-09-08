import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets, reserveRocket } from '../store/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.rockets.list);

  useEffect(() => {
    if (!list.length) dispatch(loadRockets());
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
                <div className="flex-justify-between">
                  <div className="large">{rocket.name}</div>
                  <div>{rocket.reserved && <div className="badge bg-success">Reserved</div>}</div>
                </div>
                <p className="text-dark my-1">
                  {rocket.description}
                </p>
                <button
                  type="button"
                  onClick={() => dispatch(reserveRocket({ id: rocket.id }))}
                  className={rocket.reserved ? 'btn btn-light' : 'btn btn-primary'}
                >
                  {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
