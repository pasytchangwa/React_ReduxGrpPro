import { combineReducers } from 'redux';
import rocketReducer from './rockets';
import myProfile from './myProfile';

export default combineReducers({
  rockets: rocketReducer,
  myprofile: myProfile,
});
