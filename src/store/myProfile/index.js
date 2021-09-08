/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const myProfileSlice = createSlice({
  name: 'counter',
  initialState: {},
  reducers: {
    loadProfile: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { loadProfile } = myProfileSlice.actions;
export default myProfileSlice.reducer;
