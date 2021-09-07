/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    missionRequested: (mission) => {
      mission.loading = true;
    },

    missionReceived: (mission, action) => {
      mission.list = action.payload.map((mission) => ({
        mission_id: mission.id,
        mission_name: mission.mission_name,
        description: mission.description,
        join: false,
      }));
      mission.loading = false;
    },

    missionRequestFailed: (mission) => {
      mission.loading = false;
    },
    joinMission: (mission, action) => {
      const index = mission.list.findIndex(
        (mission) => mission.id === action.payload.id
      );
      mission.list[index].join = !mission.list[index].join;
    },
  },
});

export const { missionRequested, missionReceived, missionRequestFailed, joinMission } = missionSlice.actions;
export default missionSlice.reducer;

export const loadMissions = () => (dispatch) => {
  const url = '/missions';
  return dispatch(
    apiCallBegan({
      url,
      onStart: missionRequested.type,
      onSuccess: missionReceived.type,
      onError: missionRequestFailed.type,
    }),
  );
};
