import React from 'react';

const Rockets = () => (
  <div className="card flex">
    <img className="round-img" src="https://imgur.com/DaCfMsj.jpg" alt="Falcon 1" />
    <div>
      <div className="flex-justify-between">
        <div className="large">Falcon 1</div>
        <div />
      </div>
      <p className="text-dark my-1">The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.</p>
      <button type="button" className="btn btn-primary">Reserve Rocket</button>
    </div>
  </div>
);

export default Rockets;
