import { combineReducers } from 'redux';
import rocketReducer from './rockets';
import myProfile from './myProfile';
import missionReducer from './missions';

export default combineReducers({
  rockets: rocketReducer,
  myprofile: myProfile,
  missions: missionReducer,
});
