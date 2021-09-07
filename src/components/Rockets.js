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
            <div className="card">
              <img
                className="round-img"
                style={{ width: '220px' }}
                src={rocket.flickr_images}
                alt={rocket.rocket_name}
              />
              <h3>{rocket.rocket_name}</h3>
              <p>{rocket.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
