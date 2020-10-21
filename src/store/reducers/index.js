import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import toasts from './toastReducer';

export default combineReducers({
  test: testReducer,
  auth: authReducer,
  loading: loadingReducer,
  toasts 
});
