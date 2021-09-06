/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [
    {
      id: 1,
      active: false,
      stages: 2,
      boosters: 0,
      cost_per_launch: 6700000,
      success_rate_pct: 40,
      first_flight: '2006-03-24',
      country: 'Republic of the Marshall Islands',
      company: 'SpaceX',
      height: {
        meters: 22.25,
        feet: 73,
      },
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      mass: {
        kg: 30146,
        lb: 66460,
      },
      payload_weights: [],
      first_stage: {},
      second_stage: {},
      engines: {},
      landing_legs: {},
      flickr_images: [],
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'rocket',
    },
    {
      id: 2,
      active: true,
      stages: 2,
      boosters: 0,
      cost_per_launch: 50000000,
      success_rate_pct: 97,
      first_flight: '2010-06-04',
      country: 'United States',
      company: 'SpaceX',
      height: {
        meters: 70,
        feet: 229.6,
      },
      diameter: {
        meters: 3.7,
        feet: 12,
      },
      mass: {
        kg: 549054,
        lb: 1207920,
      },
      payload_weights: [
        {
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 22800,
          lb: 50265,
        },
        {
          id: 'gto',
          name: 'Geosynchronous Transfer Orbit',
          kg: 8300,
          lb: 18300,
        },
        {
          id: 'mars',
          name: 'Mars Orbit',
          kg: 4020,
          lb: 8860,
        },
      ],
      first_stage: {
        reusable: true,
        engines: 9,
        fuel_amount_tons: 385,
        burn_time_sec: 162,
        thrust_sea_level: {
          kN: 7607,
          lbf: 1710000,
        },
        thrust_vacuum: {
          kN: 8227,
          lbf: 1849500,
        },
      },
      second_stage: {
        reusable: false,
        engines: 1,
        fuel_amount_tons: 90,
        burn_time_sec: 397,
        thrust: {
          kN: 934,
          lbf: 210000,
        },
        payloads: {
          option_1: 'dragon',
          option_2: 'composite fairing',
          composite_fairing: {
            height: {
              meters: 13.1,
              feet: 43,
            },
            diameter: {
              meters: 5.2,
              feet: 17.1,
            },
          },
        },
      },
      engines: {
        number: 9,
        type: 'merlin',
        version: '1D+',
        layout: 'octaweb',
        isp: {
          sea_level: 288,
          vacuum: 312,
        },
        engine_loss_max: 2,
        propellant_1: 'liquid oxygen',
        propellant_2: 'RP-1 kerosene',
        thrust_sea_level: {
          kN: 845,
          lbf: 190000,
        },
        thrust_vacuum: {
          kN: 914,
          lbf: 205500,
        },
        thrust_to_weight: 180.1,
      },
      landing_legs: {
        number: 4,
        material: 'carbon fiber',
      },
      flickr_images: [
        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
        'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
        'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
        'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
        'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'rocket',
    },
  ],
  reducers: {
    loadRockets: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { loadRockets } = rocketSlice.actions;
export default rocketSlice.reducer;
