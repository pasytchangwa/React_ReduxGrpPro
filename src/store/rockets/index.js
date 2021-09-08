/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    rocketRequested: (rocket) => {
      rocket.loading = true;
    },

    rocketReceived: (rocket, action) => {
      rocket.list = action.payload.map((el) => ({
        name: el.rocket_name,
        id: el.id,
        description: el.description,
        image: el.flickr_images[0],
        reserved: false,
      }));
      rocket.loading = false;
    },

    rocketRequestFailed: (rocket) => {
      rocket.loading = false;
    },
    reserveRocket: (rocket, action) => {
      const index = rocket.list.findIndex((rocket) => rocket.id === action.payload.id);
      rocket.list[index].reserved = !rocket.list[index].reserved;
    },
  },
});

export const {
  rocketRequested, rocketReceived, rocketRequestFailed, reserveRocket,
} = rocketSlice.actions;
export default rocketSlice.reducer;

export const loadRockets = () => (dispatch) => {
  const url = '/rockets';
  return dispatch(
    apiCallBegan({
      url,
      onStart: rocketRequested.type,
      onSuccess: rocketReceived.type,
      onError: rocketRequestFailed.type,
    }),
  );
};
