import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import toasts from './toastReducer';
import profile from './profileReducer';
import patients from './patientsReducer';
import patient from './singlePatientReducer';
import callback from './callbackReducer';

export default combineReducers({
  test: testReducer,
  auth: authReducer,
  loading: loadingReducer,
  toasts,
  profile,
  patient,
  patients,
  callback
});
