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
      rocket.list = action.payload;
      rocket.loading = false;
      rocket.lastFetch = Date.now();
    },

    rocketRequestFailed: (rocket) => {
      rocket.loading = false;
    },
  },
});

export const { rocketRequested, rocketReceived, rocketRequestFailed } = rocketSlice.actions;
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
