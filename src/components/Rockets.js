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
            <h3>{rocket.rocket_name}</h3>
            <p>{rocket.description}</p>
            <img src={rocket.flickr_images} alt={rocket.rocket_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
