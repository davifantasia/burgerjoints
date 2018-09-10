import { combineReducers } from 'redux';
import burgerJoints from './burgerJoints';
import photos from './photos';

export default combineReducers({
  burgerJoints,
  photos
});
