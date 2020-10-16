import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  test: testReducer,
  auth: authReducer,
  loading: loadingReducer
});
