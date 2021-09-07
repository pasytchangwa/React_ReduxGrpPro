import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets } from '../store/rockets';

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
                src={rocket.flickr_images}
                alt={rocket.rocket_name}
              />
              <div>
                <h3 className="large">{rocket.rocket_name}</h3>
                <p className="text-dark my-1">
                  <span className="badge bg-success">Reserved</span>
                  {rocket.description}
                </p>
                <button type="button" className="btn btn-primary btn-sm">Reserve Rocket</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
